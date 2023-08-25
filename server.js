// code to start the server goes here

//front end code is already written.
// i need to develop the back end so that the front end can communicate with it.
// more specifically, the note taker app must be able to save, retrieve, and delete notes from a json file.

// the first issue is that the app 'Cannot GET /notes' when clicking on the 'Get Started' button.

// i guess I can add soe boilerplate code to the server.js file to get started.

const express = require('express');
const path = require('path');
const fs = require('fs');
const {v4: uuidv4} = require('uuid');

const PORT = process.env.PORT || 3001;

const app = express();


// middlware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use('/api', apiRoutes);


// middleware for serving static files
app.use(express.static('public'));

// define routes below







// start the server on the port

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
});