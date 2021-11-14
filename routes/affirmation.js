const express = require('express');
const affirmationRouter = express.Router();
const Affirmation = require('../models/Affirmation');

affirmationRouter.get('/', (req, res) => {
   Affirmation.find({})
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send('Something went wrong'));

   //    res.send('Route Working!!');
});

affirmationRouter.post('/', (req, res) => {
   const { description } = req.body;

   Affirmation.create({ description })
      .then((result) => {
         res.status(200).send(result);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).send('Something went wrong');
      });
});

affirmationRouter.put('/:id', (req, res) => {
   Affirmation.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
      Affirmation.findOne({ _id: req.params.id })
         .then((result) => {
            res.status(200).send(result);
         })
         .catch((err) => {
            console.log(err);
            res.status(500).send('Something went wrong');
         });
   });
});

affirmationRouter.delete('/:id', (req, res) => {
   Affirmation.findByIdAndRemove({ _id: req.params.id })
      .then((result) => {
         console.log(result);
         res.status(200).send('Item successfully deleted ');
      })
      .catch((err) => {
         console.log(err);
         res.status(500).send('Something went wrong');
      });
});

module.exports = affirmationRouter;
