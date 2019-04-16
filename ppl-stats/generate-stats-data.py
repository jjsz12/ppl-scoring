import ConfigParser
import pandas as pd
import numpy as np
import pymongo
import json
import sys

# read settings file
config = ConfigParser.RawConfigParser()
config.read('settings.cfg')
season_ids = config.get('generate-stats', 'season_ids').split(',')

uri = 'mongodb://localhost:27017'
client = pymongo.MongoClient(uri)

db = client['ppl_data']
results = db['results']
scores = db['scores']
standings = db['standings']
print 'counts (results, scores, standings): ({}, {}, {})'.format(
    results.estimated_document_count(),
    scores.estimated_document_count(),
    standings.estimated_document_count()
)

find_query = { '$or': [] }
for season_id in season_ids:
    find_query.get('$or').append({ 'season_id': int(season_id) })
print 'find query: ', find_query

df = pd.DataFrame()
i=0
for item in scores.find(find_query, projection={'_id': False}, sort=[
    ('season_id', 1), ('game_id', 1), ('week_id', 1), ('group_id', 1), ('points', -1)
]):
    df = df.append(item, ignore_index=True)
    i=i+1
    if i%500==0:
        print 'Items processed: {}'.format(i)
print 'Items processed: {}'.format(i)

# FIXME: bad performance
def gen_arrays(var):
    var['wins_array'] = array[int(var.name)+1:]
    var['losses_array'] = array[:int(var.name)]
    return var

grouped = df.groupby(['season_id', 'week_id', 'group_id', 'game_id'])
df2 = pd.DataFrame()
for name, group in grouped:
    array = group['player'].as_matrix()[:]
    group.reset_index(inplace=True)
    # group['wins'] = np.flipud(group.index.values)
    # group['losses'] = group.index.values
    print 'Generating win/loss arrays for group: {}'.format(name)
    group = group.apply(gen_arrays, axis=1)
    df2 = df2.append(group)

def concat_wins(df):
    return np.concatenate(df['wins_array'].values)

def concat_losses(df):
    return np.concatenate(df['losses_array'].values)

def total_stuff(series):
    series['wins'] = len(series['wins_array'])
    series['losses'] = len(series['losses_array'])
    return series

def wp(series):
    series['wp'] = float(series['wins']) / (series['wins'] + series['losses'])
    return series

def owp(series):
    print 'Calculating owp for {}, season {}'.format(series.name[1], series.name[0])
    opponents = np.concatenate([series['wins_array'], series['losses_array']])
    owp_total = 0
    for opponent in opponents:
        o_wins = df3.loc[(series.name[0], opponent)]['wins_array']
        o_losses = df3.loc[(series.name[0], opponent)]['losses_array']
        o_wins = [y for y in o_wins if y != series.name[1]]
        o_losses = [y for y in o_losses if y != series.name[1]]
        owp_total += ( float(len(o_wins)) / (len(o_wins) + len(o_losses)) )
    series['owp'] = owp_total / len(opponents)
    return series

def oowp(series):
    print 'Calculating oowp for {}, season {}'.format(series.name[1], series.name[0])
    opponents = np.concatenate([series['wins_array'], series['losses_array']])
    oowp_total = 0
    for opponent in opponents:
        oowp_total += df3.loc[(series.name[0], opponent)]['owp']
    series['oowp'] = oowp_total / len(opponents)
    return series

def sos(series):
    series['sos'] = (2 * series['owp'] + series['oowp']) / 3
    return series

def rpi(series):
    series['rpi'] = (.25 * series['wp']) + (.5 * series['owp']) + (.25 * series['oowp'])
    return series

grouped = df2.groupby(['season_id', 'player'])
print 'Applying function: {}'.format('concat_wins')
win_series = grouped.apply(concat_wins)
print 'Applying function: {}'.format('concat_losses')
loss_series = grouped.apply(concat_losses)
df3 = pd.concat(dict(wins_array = win_series, losses_array = loss_series), axis=1)
print 'Applying function: {}'.format('total_stuff')
df3 = df3.apply(total_stuff, axis=1)
print 'Applying function: {}'.format('wp')
df3 = df3.apply(wp, axis=1)
print 'Applying function: {}'.format('owp')
df3 = df3.apply(owp, axis=1)
print 'Applying function: {}'.format('oowp')
df3 = df3.apply(oowp, axis=1)
print 'Applying function: {}'.format('sos')
df3 = df3.apply(sos, axis=1)
print 'Applying function: {}'.format('rpi')
df3 = df3.apply(rpi, axis=1)

df4 = df3.drop(['wins_array', 'losses_array'], axis=1)
df4.reset_index(inplace=True)

season_grouped = df4.groupby('season_id')
df5 = pd.DataFrame()
for name, group in season_grouped:
    group.sort_values('wp', ascending=False, inplace=True)
    group['wp_rank'] = group.reset_index().index + 1
    group.sort_values('owp', ascending=False, inplace=True)
    group['owp_rank'] = group.reset_index().index + 1
    group.sort_values('oowp', ascending=False, inplace=True)
    group['oowp_rank'] = group.reset_index().index + 1
    group.sort_values('sos', ascending=False, inplace=True)
    group['sos_rank'] = group.reset_index().index + 1
    group.sort_values('rpi', ascending=False, inplace=True)
    group['rpi_rank'] = group.reset_index().index + 1
    df5 = df5.append(group)

stats_json = df5.to_json(orient='records')

stats = db['stats']
stats.insert_many(json.loads(stats_json))
