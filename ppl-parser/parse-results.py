from selenium import webdriver
from pymongo import MongoClient
import sys

options = webdriver.ChromeOptions()
options.add_argument('headless')
driver = webdriver.Chrome(chrome_options=options)

client = MongoClient('mongodb://localhost:27017')
db = client['ppl_data']
collection = db['game_results']

base_url = 'http://ppl.league.papa.org/meetResults'
season_id = '14'

week_ids = range(1, 10)
for week_id in week_ids:
    url = base_url + '/' + season_id + '/' + str(week_id)
    driver.get(url)
    results = driver.find_elements_by_xpath("//table[@class='matchResults']")
    for element in results:
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
            game_name = game_value.find_element_by_xpath(".//th[@class='header1']").text
            scores = game_value.find_elements_by_xpath(".//td[contains(@class, 'machineScoreField')]")
            points = game_value.find_elements_by_xpath(".//td[contains(@class, 'leaguePointsField')]")

            for player_index, player_value in enumerate(players):
                document = dict()
                document['season_id'] = int(season_id)
                document['week_id'] = int(week_id)
                document['group_id'] = int(group_id)
                document['game_id'] = int(game_index)
                document['player'] = player_value.text
                document['position'] = int(player_index)
                document['game_name'] = game_name
                document['location'] = location
                document['score'] = scores[player_index].text
                document['points'] = int(points[player_index].text)
                # print document
                # sys.exit(1)
                collection.insert_one(document)

# create view for results table (used in ppl-express)
db.command(
    'create',
    'match_groups',
    viewOn='game_results',
    pipeline=[{
            '$group':{
                '_id':{
                    'season_id':'$season_id',
                    'week_id':'$week_id',
                    'group_id':'$group_id',
                    'position':'$position'
                },
                'player':{'$first':'$player'},
                'location':{'$first':'$location'},
                'scores':{
                    '$push':{
                        'game_id':'$game_id',
                        'game_name':'$game_name',
                        'score':'$score',
                        'points':'$points'
                    }
                }
            }
        },
        {
            '$project': {
                'season_id': '$_id.season_id',
                'week_id': '$_id.week_id',
                'group_id': '$_id.group_id',
                'position': '$_id.position',
                'player': 1,
                'scores': 1,
                'location': 1,
                '_id': 0
            }
        }]
)
