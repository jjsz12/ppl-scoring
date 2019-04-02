import requests
import os

base_url = 'http://localhost:3001'
seasons = range(13,17)
weeks = range(1,10)
stats_route = '/stats/{season}'
standings_route = '/standings/{season}'
results_route = '/results/{season}/{week}'

def save(route):
    print 'Caching data route: {}'.format(route)
    r = requests.get(base_url + route)
    f = open('build' + route, 'w')
    f.write(r.text)
    f.close()

if not os.path.exists('build/stats'):
    os.makedirs('build/stats')
if not os.path.exists('build/standings'):
    os.makedirs('build/standings')
if not os.path.exists('build/results'):
    os.makedirs('build/results')

for season in seasons:
    save(stats_route.format(season=season))
    save(standings_route.format(season=season))
    if not os.path.exists('build/results/{}'.format(season)):
        os.makedirs('build/results/{}'.format(season))
    for week in weeks:
        save(results_route.format(season=season, week=week))
