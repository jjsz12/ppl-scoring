from pymongo import MongoClient
import ConfigParser
import sys

# read settings file
config = ConfigParser.RawConfigParser()
config.read('settings.cfg')
mongo_uri = config.get('create-game-catalog', 'mongo_uri')
db_name = config.get('create-game-catalog', 'db_name')
base_collection_name = config.get('create-game-catalog', 'base_collection_name')
dest_collection_name = config.get('create-game-catalog', 'dest_collection_name')

# database connection setup
client = MongoClient(mongo_uri)
db = client[db_name]
collection = db[base_collection_name]
dest_collection = db[dest_collection_name]

catalog = []
start_id_value = 1
original_game_list = collection.find().distinct('game_name')
original_game_list.sort()
for game in original_game_list:
    print 'Game: ' + game
    # id, game name, subtype, year, pinburgh category, alt names
    # options: create new entry, add to previous as alt title
    choice = '0'
    while (choice != '1') and (choice != '2') and (choice != '3'):
        choice = raw_input('Choose: (1) New entry, (2) Add to previous, (3) Pass: ')
    if choice == '1':
        success = False
        while (success != True):
            name = raw_input('New game name: ')
            subtype = raw_input('Subtype: (0) None, (1) Pro, (2) Premium/LE: ')
            year = raw_input('Year released: ')
            pinburgh_cat = raw_input('Pinburgh category: (1) EM, (2) ESS, (3) LSS, (4) DMD: ')
            try:
                document = dict()
                document['id'] = start_id_value
                document['title'] = name
                document['year'] = year
                document['subtype'] = int(subtype)
                document['pinburgh_category'] = int(pinburgh_cat)
                document['alt_titles'] = [game]
                result = dest_collection.insert_one(document)
                print result.inserted_id
                start_id_value += 1
                success = True
            except Exception as e:
                print e
    if choice == '2':
        success = False
        while (success != True):
            prev_id = raw_input('id value: ')
            try:
                result = dest_collection.update_one(
                    { 'id': int(prev_id) },
                    { '$addToSet': { 'alt_titles': game } }
                )
                print result.raw_result
                success = True
            except Exception as e:
                print e
    if choice == '3':
        pass
