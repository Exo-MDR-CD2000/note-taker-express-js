// so for this file, I need to define the routes for the api.
//there should be three main routes: get, post, and delete.


const express = require('express');

//then the imported modular routes from the seperate files.

const getNotes = require('./getNotes');
const saveNotes = require('./saveNotes');
const deleteNotes = require('./deleteNotes');

const app = express();

// then some middleware from the other files.

app.use('/getNotes', getNotes);
app.use('/saveNotes', saveNotes);
app.use('/deleteNotes', deleteNotes);

module.exports = app;

//what this file should do is bring in the other routes from the other files and then export them to the server.js file.

