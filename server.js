// code to start the server goes here

//front end code is already written.
// i need to develop the back end so that the front end can communicate with it.
// more specifically, the note taker app must be able to save, retrieve, and delete notes from a json file.

// the first issue is that the app 'Cannot GET /notes' when clicking on the 'Get Started' button.

// i guess I can add soe boilerplate code to the server.js file to get started.

const express = require('express');
const path = require('path');
const fs = require('fs');
//const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3001;

const app = express();

// middlware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', apiRoutes); // this will be defined when I get to the routes folder

// middleware for serving static files
app.use(express.static('public'));

// define routes below for HTML files

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// start the server on the port

app.listen(PORT, () => {
  console.log(`API server running on port http://localhost:${PORT}`);
});

// I believe these are the two main routes for this app. I can view the index.html file and the notes.html file in insomnia so
// now I need to write the other routes.

//note that this server file does not define the routes for the api. This file is purely for starting the server and defining the routes for the html files.