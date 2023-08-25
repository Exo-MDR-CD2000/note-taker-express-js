// code to start the server goes here

//front end code is already written.
// i need to develop the back end so that the front end can communicate with it.
// more specifically, the note taker app must be able to save, retrieve, and delete notes from a json file.

// the first issue is that the app 'Cannot GET /notes' when clicking on the 'Get Started' button.

// i guess I can add soe boilerplate code to the server.js file to get started.

const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();