const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const gamesRouter = function(gamesCollection) {
  //index
  router.get('/', (req, res) => {
    gamesCollection
      .find()
      .toArray()
      .then( (docs) => res.json(docs))
  });

  //show
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    gamesCollection
      .find({ _id: ObjectID(id)})
      .toArray()
      .then( (docs) => res.json(docs))
  });

  router.post('/', (req, res) => {
    const newGame = req.body.gameData;
    gamesCollection
      .insert(newGame)
      .then( () => {
        gamesCollection
          .find()
          .toArray()
          .then( (docs) => res.json(docs))
        });
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedGame = req.body.gameData;
    gamesCollection
      .updateOne(
        { _id: ObjectID(id)},
        { $set: updatedGame },
        { upsert: true }
      )
      .then( () => {
        gamesCollection
          .find({ _id: ObjectID(id)})
          .toArray()
          .then( (docs) => res.json(docs))
      })
  });

  router.delete('/all', (req, res) => {
    gamesCollection
      .deleteMany({})
      .then( () => {
        gamesCollection
          .find()
          .toArray()
          .then( (docs) => res.json(docs))
        });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    gamesCollection
      .deleteOne({ _id: ObjectID(id)})
      .then( () => {
        gamesCollection
          .find()
          .toArray()
          .then( (docs) => res.json(docs))
      });
  });

  return router;
};


module.exports = gamesRouter ;
