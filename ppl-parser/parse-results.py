from selenium import webdriver
from pymongo import MongoClient
import ConfigParser
import sys
from datetime import datetime

# read settings file
config = ConfigParser.RawConfigParser()
config.read('settings.cfg')
mongo_uri = config.get('parse-results', 'mongo_uri')
db_name = config.get('parse-results', 'db_name')
base_collection_name = config.get('parse-results', 'base_collection_name')
base_url = config.get('parse-results', 'base_url')
season_ids = config.get('parse-results', 'season_ids').split(',')
results_collection = config.get('parse-results', 'results_collection')
standings_collection = config.get('parse-results', 'standings_collection')
dates_collection = config.get('parse-results', 'dates_collection')
pull_new_data = config.getboolean('parse-results', 'pull_new_data')
create_views = config.getboolean('parse-results', 'create_views')
update_date_only = config.getboolean('parse-results', 'update_date_only')

# database connection setup
client = MongoClient(mongo_uri)
db = client[db_name]
collection = db[base_collection_name]

if pull_new_data:
    # headless browser driver setup
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    driver = webdriver.Chrome(chrome_options=options)

    for season_id in season_ids:
        # nine weeks per season
        week_ids = range(1, 10)
        for week_id in week_ids:
            url = base_url + '/' + season_id + '/' + str(week_id)
            print 'Fetching data from {}'.format(url)
            driver.get(url)
            # get the listed date for the week
            # TODO: handle "selenium.common.exceptions.NoSuchElementException"
            date = driver.find_element_by_xpath("//div[@class='blockLeft']/h1/small").text.split('-')[1].strip()
            date_iso = datetime.strptime(date, '%B %d, %Y').isoformat()
            if update_date_only:
                print 'Updating date: {}/{} {}'.format(season_id, week_id, date)
                collection.update_many(
                    { 'season_id': int(season_id), 'week_id': int(week_id) },
                    { '$set': { 'date': date } }
                )
            else:
                # get the results tables for each group per week
                results = driver.find_elements_by_xpath("//table[@class='matchResults']")
                for element in results:
                    # get the list of players, group number, location, and list of games
                    players_table = element.find_element_by_xpath(".//table[@class='matchResultsPlayers']")
                    players = players_table.find_elements_by_xpath(".//td[@class='playerName']")
                    group_id_text = element.find_element_by_xpath(".//th[@class='header1 noBorder']").text
                    group_id = group_id_text.split()[1]
                    location = group_id_text.split()[2].strip(')(')
                    location = element.find_element_by_xpath(".//small").text.strip(')(')
                    games = element.find_elements_by_xpath(".//table[contains(@class, 'matchResultsGame')]")
                    stat = [season_id, week_id, group_id, location, len(players)]
                    print 'Season: {}, Week: {}, Group: {}, Location: {}, Player Count: {}'.format(*stat)
                    for game_index, game_value in enumerate(games, start=1):
                        # for each game, get the list of scores and list of points
                        game_name = game_value.find_element_by_xpath(".//th[@class='header1']").text
                        scores = game_value.find_elements_by_xpath(".//td[contains(@class, 'machineScoreField')]")
                        points = game_value.find_elements_by_xpath(".//td[contains(@class, 'leaguePointsField')]")

                        for player_index, player_value in enumerate(players):
                            # insert document in mongo for each player
                            # include their corresponding score and points earned for current game
                            document = dict()
                            document['date'] = date
                            document['date_iso'] = date_iso
                            document['season_id'] = int(season_id)
                            document['week_id'] = int(week_id)
                            document['group_id'] = int(group_id)
                            document['game_id'] = int(game_index)
                            document['player'] = player_value.text
                            document['position'] = int(player_index)
                            document['game_name'] = game_name
                            document['location'] = location
                            document['score_str'] = scores[player_index].text
                            try:
                                document['score'] = int(scores[player_index].text.replace(',', ''))
                            except ValueError:
                                document['score'] = 0
                            document['points'] = int(points[player_index].text)
                            # print document
                            # sys.exit(1)
                            collection.insert_one(document)

    # end driver session
    driver.quit()

if create_views:
    try:
        # create results table view
        db.command(
            'create',
            results_collection,
            viewOn=base_collection_name,
            pipeline=[
                {
                    '$sort': {
                        'season_id': 1,
                        'week_id': 1,
                        'group_id': 1,
                        'position': 1,
                        'game_id': 1
                    }
                },
                {
                    '$group': {
                        '_id': {
                            'season_id': '$season_id',
                            'week_id': '$week_id',
                            'group_id': '$group_id',
                            'position': '$position'
                        },
                        'player': { '$first': '$player' },
                        'location': { '$first': '$location' },
                        'scores': {
                            '$push': {
                                'score': '$score',
                                'score_str': '$score_str',
                                'points': '$points'
                            }
                        },
                        'games': {
                            '$push': '$game_name'
                        }
                    }
                },
                {
                    '$sort': {
                        '_id': 1
                    }
                },
                {
                    '$group': {
                        '_id': {
                            'season_id': '$_id.season_id',
                            'week_id': '$_id.week_id',
                            'group_id': '$_id.group_id'
                        },
                        'location': { '$first': '$location' },
                        'games': { '$first': '$games' },
                        'results': {
                            '$push': {
                                'player': '$player',
                                'scores': '$scores'
                            }
                        }
                    }
                },
                {
                    '$sort': {
                        '_id': 1
                    }
                }
            ]
        )
    except Exception as e:
        print 'Error: failed to create "results" view (does it already exist?)'
        print e

    try:
        # create view for standings page
        db.command(
            'create',
            standings_collection,
            viewOn=base_collection_name,
            pipeline=[
                {
                    '$group': {
                        '_id': {
                            'season_id': '$season_id',
                            'player': '$player',
                            'week_id': '$week_id'
                        },
                        'week_points': {'$sum': '$points'}
                    }
                },
                {
                    '$sort': {'_id.season_id': 1, 'week_points': -1}
                },
                {
                    '$group': {
                        '_id': {
                            'season_id': '$_id.season_id',
                            'player': '$_id.player'
                        },
                        'total_points': {'$sum': '$week_points'},
                        'average_points': {'$avg': '$week_points'},
                        'points': {'$push': {
                            'k': {'$concat': ['week_', {'$toString': '$_id.week_id'}]},
                            'v': '$week_points'
                        }}
                    }
                },
                {
                    '$sort': {'total_points': -1}
                },
                {
                    '$project': {
                        'adjusted_points': { '$sum': { '$slice': ['$points.v', 6] } },
                        'weeks_played': { '$size': '$points.v' },
                        'points': { '$arrayToObject': '$points' },
                        'total_points': 1,
                        'average_points': 1
                    }
                }
            ]
        )
    except Exception as e:
        print 'Error: failed to create "standings" view (does it already exist?)'
        print e

    try:
        # create view for dates collection (populates dropdown menus)
        db.command(
            'create',
            dates_collection,
            viewOn=base_collection_name,
            pipeline=[
                {
                    '$group': {
                        '_id': '$date',
                        'season_id': { '$first': '$season_id'},
                        'week_id': { '$first': '$week_id'}
                    }
                },
                {
                    '$sort': { 'season_id': 1, 'week_id': 1 }
                }
            ]
        )
    except Exception as e:
        print 'Error: failed to create "dates" view (does it already exist?)'
        print e
