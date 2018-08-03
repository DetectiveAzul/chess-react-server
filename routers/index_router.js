const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const gamesRouter = require('./games_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  console.log('Connected to DB');
  const db = client.db('chess');
  const gamesCollection = db.collection('games');
  router.use('/games/', gamesRouter(gamesCollection));
});

module.exports = router;
