const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const playersRouter = function(playersCollection) {
  //index
  router.get('/', (req, res) => {
    playersCollection
      .find()
      .toArray()
      .then( (docs) => res.json(docs))
  });

  //show
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    playersCollection
      .find({ _id: ObjectID(id)})
      .toArray()
      .then( (docs) => res.json(docs))
  });

  router.post('/', (req, res) => {
    const newGame = req.body.playerData;
    playersCollection
      .insert(newGame)
      .then( () => {
        playersCollection
          .find()
          .toArray()
          .then( (docs) => res.json(docs))
        });
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedGame = req.body.playerData;
    playersCollection
      .updateOne(
        { _id: ObjectID(id)},
        { $set: updatedGame },
        { upsert: true }
      )
      .then( () => {
        playersCollection
          .find({ _id: ObjectID(id)})
          .toArray()
          .then( (docs) => res.json(docs))
      })
  });

  router.delete('/all', (req, res) => {
    playersCollection
      .deleteMany({})
      .then( () => {
        playersCollection
          .find()
          .toArray()
          .then( (docs) => res.json(docs))
        });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    playersCollection
      .deleteOne({ _id: ObjectID(id)})
      .then( () => {
        playersCollection
          .find()
          .toArray()
          .then( (docs) => res.json(docs))
      });
  });

  return router;
};


module.exports = playersRouter ;
