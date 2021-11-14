const express = require('express');
const entryRouter = express.Router();
const Entry = require('../models/Entry');

entryRouter.get('/', (req, res) => {
   Entry.find({})
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send('Something went wrong'));

   //    res.send('Route Working!!');
});

entryRouter.post('/', (req, res) => {
   const { subject, description } = req.body;

   Entry.create({ subject, description })
      .then((result) => {
         res.status(200).send(result);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).send('Something went wrong');
      });
});

entryRouter.put('/:id', (req, res) => {
   Entry.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
      Entry.findOne({ _id: req.params.id })
         .then((result) => {
            res.status(200).send(result);
         })
         .catch((err) => {
            console.log(err);
            res.status(500).send('Something went wrong');
         });
   });
});

entryRouter.delete('/:id', (req, res) => {
   Entry.findByIdAndRemove({ _id: req.params.id })
      .then((result) => {
         console.log(result);
         res.status(200).send('Item successfully deleted ');
      })
      .catch((err) => {
         console.log(err);
         res.status(500).send('Something went wrong');
      });
});

module.exports = entryRouter;
