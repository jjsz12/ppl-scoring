var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
var client;
var db;
MongoClient.connect(url, function(err, client) {
  this.client = client;
  this.db = this.client.db('ppl_data');
});

router.get('/results/:season_id/:week_id', function(req, res, next) {
  console.log(req.params);
  var collection = this.db.collection('results');
  result = collection.find({
    '_id.season_id': parseInt(req.params.season_id),
    '_id.week_id': parseInt(req.params.week_id)
  }).toArray(function(err, items) {
    res.send(items);
  });
});

router.get('/standings/:season_id', function(req, res, next) {
  console.log(req.params);
  var collection = this.db.collection('standings');
  result = collection.find({
    '_id.season_id': parseInt(req.params.season_id)
  }).sort({
    'adjusted_points': -1
  }).toArray(function(err, items) {
    res.send(items);
  });
});

router.get('/dates', function(req, res, next) {
  console.log(req.params);
  var collection = this.db.collection('dates');
  result = collection
    .find()
    .toArray(function(err, items) {
      res.send(items);
    });
});

router.get('/dates/seasons', function(req, res, next) {
  console.log(req.params);
  var collection = this.db.collection('dates');
  result = collection
    .aggregate([
      { '$group': {
          '_id': '$season_id',
          'start': { '$first':'$_id' },
          'end': { '$last':'$_id' }
      } },
      { '$sort': { '_id': 1 } }
    ])
    .toArray(function(err, items) {
      res.send(items);
    });
});

router.get('/players', function(req, res, next) {
  console.log(req.params);
  var collection = this.db.collection('stats');
  result = collection
    .aggregate([
      { '$group': {
        '_id': '$player'
      } },
      { '$sort': { '_id': 1 } }
    ])
    .toArray(function(err, items) {
      res.send(items.map(item => item._id));
    });
});

router.get('/player/:player', function(req, res, next) {
  console.log(req.params);
  let standings_collection = this.db.collection('standings')
  standings_collection.aggregate([
    { '$sort': { 'adjusted_points': -1 } },
    { '$group': { _id: '$_id.season_id', ranking: { '$push': '$_id.player' } } },
    { '$project': { 'rank': { '$indexOfArray': ['$ranking', req.params.player] } } }
  ]).toArray((err, rankings) => {
    var collection = this.db.collection('stats');
    collection.aggregate([
      { '$match': { 'player': req.params.player } },
      { '$lookup': {
        from: 'standings',
        let: { 'player': '$player', 'season_id': '$season_id' },
        pipeline: [{
          $match: {
            $expr: {
              $and: [
                {
                  $eq: [
                    "$_id.player",
                    "$$player"
                  ]
                },
                {
                  $eq: [
                    "$_id.season_id",
                    "$$season_id"
                  ]
                }
              ]
            }
          }
        }],
        as: 'points'
      } },
    ]).sort({"season_id": 1}).toArray((err, items) => {
      res.send(items.map(item => {
        let rank = rankings.find(o => o._id === item.season_id);
        item.seed = rank.rank + 1;
        return item;
      }));
    });
  });

});

router.get('/stats/:season_id', function(req, res, next) {
  console.log(req.params);
  var collection = this.db.collection('stats');
  result = collection.aggregate([
    { '$match': { 'season_id': parseInt(req.params.season_id) } },
    { '$lookup': {
      from: 'standings',
      let: { 'player': '$player' },
      pipeline: [{
        $match: {
          $expr: {
            $and: [
              {
                $eq: [
                  "$_id.player",
                  "$$player"
                ]
              },
              {
                $eq: [
                  "$_id.season_id",
                  parseInt(req.params.season_id)
                ]
              }
            ]
          }
        }
      }],
      as: 'points'
    } },
    { '$sort': { 'points.adjusted_points': -1 } }
  ]).toArray(function(err, items) {
    res.send(items.map(function(item, index) {
      item['seed'] = index + 1;
      return item;
    }));
  })
})

module.exports = router;
