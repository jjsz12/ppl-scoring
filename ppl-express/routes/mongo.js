var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
var client;
var collection;
MongoClient.connect(url, function(err, client) {
  this.client = client;
  this.collection = this.client.db('ppl_data').collection('match_groups');
});

/* GET home page. */
router.get('/results/:season_id/:week_id', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.params);
  result = this.collection.aggregate()
    .match({ season_id: parseInt(req.params.season_id), week_id: parseInt(req.params.week_id) })
    .sort({ group_id: 1, position: 1})
    .group({ _id: '$group_id', location: {$first: '$location'}, scores: { $push: { player: '$player', scores:'$scores'}} })
    .sort({ _id: 1})
    .toArray(function(err, items) {
      res.send(items);
    });
});

module.exports = router;
