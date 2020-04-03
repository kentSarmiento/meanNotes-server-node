const express = require('express');
const router = express.Router();

const Note = require('../models/note');

var notes = [];

router.post("", (req, res) => {
  console.log("Received post request...");

  /*
   * Method 1: mapping
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    category: req.body.category,
  });
   *
   * Method 2: direct
   */
  const note = new Note( req.body );

  notes.push(note);
  note.save().then(result => {
    res.status(201).send(result);
  });
});

router.get("", (req, res) => {
  console.log("Received get request...");

  Note.find()
    .then(documents => {
      res.status(200).send(documents);
    });
});

router.get("/:id", (req, res) => {
  console.log("Received get request...");

  Note.findOne({_id: req.params.id})
    .then(note => {
      if (note) {
        res.status(200).send(note);
      } else {
        res.status(404).json({message: 'Note not found!'});
      }
    });
});

router.put("/:id", (req, res) => {
  console.log("Received put request for " + req.params.id);

  const note = new Note({
    _id: req.params.id,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author,
    });

  Note.updateOne({_id: req.params.id}, note)
    .then(documents => {
      res.status(200).send(documents);
    });
});

router.delete("/:id", (req, res) => {
  console.log('Received delete request for ' + req.params.id);

  Note.deleteOne({_id: req.params.id})
    .then(result => {
      res.status(200).end();
    });
});

module.exports = router;