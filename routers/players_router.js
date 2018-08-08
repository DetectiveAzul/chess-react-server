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
  router.get('/:account', (req, res) => {
    playersCollection
      .find({ account: req.params.account})
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

  router.put('/:account', (req, res) => {
    const updatedPlayer = req.body.playerData;
    playersCollection
      .updateOne(
        { account: req.params.account},
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

  router.delete('/:account', (req, res) => {
    playersCollection
      .deleteOne({ account: req.params.account})
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
