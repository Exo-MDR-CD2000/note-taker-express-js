//define the DELETE route for deleting notes.
const deleteNotes = require('express').Router();

const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require("uuid");



  deleteNotes.delete('/:id', (req, res) => {
    const data = fs.readFileSync('./db/db.json', 'utf8');
    const notes = JSON.parse(data);
    const remainingNotes = notes.filter((n) => n.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(remainingNotes, null, 2));
    res.json(remainingNotes);
  }); // this should delete a single note from the db.json file.

  module.exports = deleteNotes;