// so for this file, I need to define the routes for the api.
//there should be three main routes: get, post, and delete.


const express = require('express');

//then the imported modular routes from the seperate files.

const getNotesRouter = require('./getNotes');
const saveNotesRouter = require('./saveNotes');
const deleteNotesRouter = require('./deleteNotes');

const app = express();

// then some middleware from the other files.

app.use('/notes', getNotesRouter);
app.use('/notes', saveNotesRouter);
app.use('/notes', deleteNotesRouter);

module.exports = app;

//what this file should do is bring in the other routes from the other files and then export them to the server.js file.

