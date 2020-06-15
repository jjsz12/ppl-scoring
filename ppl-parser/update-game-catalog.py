from pymongo import MongoClient
from fuzzywuzzy import fuzz
from fuzzywuzzy import process
import ConfigParser
import sys

# read settings file
config = ConfigParser.RawConfigParser()
config.read('settings.cfg')
mongo_uri = config.get('update-game-catalog', 'mongo_uri')
db_name = config.get('update-game-catalog', 'db_name')
scores_collection_name = config.get('update-game-catalog', 'scores_collection_name')
catalog_collection_name = config.get('update-game-catalog', 'catalog_collection_name')

# database connection setup
client = MongoClient(mongo_uri)
db = client[db_name]
scores_collection = db[scores_collection_name]
catalog_collection = db[catalog_collection_name]

game_names = catalog_collection.distinct('title')
last_id_value = catalog_collection.find_one({}, sort=[('id', -1)]).get('id')
next_id_value = last_id_value + 1

lookup = { '$lookup': {
    'from': 'game_catalog',
    'localField': 'game_name',
    'foreignField': 'alt_titles',
    'as': 'game_info'
} }
match = { '$match': {'game_info': []} }
group = { '$group': {
    '_id': '$game_name',
    'game_name': { '$first': '$game_name' },
    'location': { '$first': '$location' },
    'scoreCount': { '$sum': 1 },
    'sample1': { '$first': '$score_str' },
    'sample2': { '$last': '$score_str' }
}}
unknown_games = scores_collection.aggregate([lookup, match, group])
for game in unknown_games:
    game_name = game.get('game_name')
    location = game.get('location')
    count = game.get('scoreCount')
    sample1 = game.get('sample1')
    sample2 = game.get('sample2')
    print 'New game name: {}, Location: {}, Count: {}, Sample scores: {}; {}'.format(game_name, location, count, sample1, sample2)
    matches = process.extract(game_name, game_names, limit=3)
    print 'Closest matches:'
    for match in matches:
        name = match[0]
        score = match[1]
        id = catalog_collection.find_one({ 'title': name }).get('id')
        print '{} (score: {}, id: {})'.format(name, score, id)
    print ''

    choice = '0'
    while (choice != '1') and (choice != '2') and (choice != '3'):
        choice = raw_input('Choose: (1) New entry, (2) Add to previous, (3) Pass: ')
    if choice == '1':
        success = False
        while (success != True):
            print 'Next ID assigned will be: {}'.format(next_id_value)
            name = raw_input('New game name: ')
            name_sort = raw_input('Sort string: ')
            subtype = raw_input('Subtype: (0) None, (1) Pro, (2) Premium/LE: ')
            year = raw_input('Year released: ')
            mfr = raw_input('Manufacturer: ')
            pinburgh_cat = raw_input('Pinburgh category: (1) EM, (2) ESS, (3) LSS, (4) DMD: ')
            try:
                document = dict()
                document['id'] = next_id_value
                document['title'] = name
                document['title_sort'] = name_sort
                document['year'] = year
                document['mfr'] = mfr
                document['subtype'] = int(subtype)
                document['pinburgh_category'] = int(pinburgh_cat)
                document['alt_titles'] = [game_name]
                result = catalog_collection.insert_one(document)
                print result.inserted_id
                next_id_value += 1
                success = True
            except Exception as e:
                print e
    if choice == '2':
        success = False
        while (success != True):
            prev_id = raw_input('id value: ')
            try:
                result = catalog_collection.update_one(
                    { 'id': int(prev_id) },
                    { '$addToSet': { 'alt_titles': game_name } }
                )
                print result.raw_result
                success = True
            except Exception as e:
                print e
    if choice == '3':
        pass

    print ''

# result = process.extract("F-14", game_names, limit=3)
# print result
