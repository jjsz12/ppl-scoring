from pymongo import MongoClient
import ConfigParser
import sys

# read settings file
config = ConfigParser.RawConfigParser()
config.read('settings.cfg')
mongo_uri = config.get('append-mfr', 'mongo_uri')
db_name = config.get('append-mfr', 'db_name')
collection_name = config.get('append-mfr', 'collection_name')

client = MongoClient(mongo_uri)
db = client[db_name]
collection = db[collection_name]

mfrs = [
    'Stern',
    'Bally/Midway',
    'Williams',
    'Data East',
    'Gottlieb/Premier',
    'Sega',
    'Capcom',
    'Jersey Jack',
    'Spooky',
    'American',
    'Chicago Gaming Company',
    'Dutch Pinball',
    'Multimorphic',
    'Chicago Coin',
    'Atari',
    'Game Plan',
    'InterFlip',
    'Mr. Game',
    'Playmatic',
    'Zaccaria',
    'Segasa/Sonic'
]

for index, mfr in enumerate(mfrs):
    print '({}) {}'.format(index, mfr)

# sys.exit(1)

group = { '$group': { '_id': '$title', 'year': { '$first': '$year' }, 'current_mfr': { '$first': '$mfr' } } }
sort = { '$sort': { '_id': 1 } }
project = { '$project': { '_id': 0, 'title': '$_id', 'year': 1, 'current_mfr': 1 } }

games = collection.aggregate([group, sort, project])
for game in games:
    title = game.get('title')
    year = game.get('year')
    current_mfr = game.get('current_mfr')
    if (current_mfr != None):
        print 'Skipping game: {} ({}). Defined mfr: {}'.format(title, year, current_mfr)
        continue
    print 'Game: {} ({})'.format(title, year)
    mfr = ''
    choice = raw_input('Choose mfr (-1: custom; -2: skip): ')
    if choice == '-2':
        print 'SKIPPED'
        continue
    if choice == '-1':
        mfr = raw_input('Type mfr: ')
    else:
        mfr = mfrs[int(choice)]
    result = collection.update_many(
        { 'title': title },
        { '$set': { 'mfr': mfr } }
    )
    print 'Updaing mfr: ' + mfr
    print 'Updated {} document.'.format(result.raw_result.get('nModified'))
    print ''
