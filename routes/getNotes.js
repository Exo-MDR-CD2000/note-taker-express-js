//define the GET route for retrieving notes. // let's just make this file retrieve the notes from the db.json file.

const getNotes = require('express').Router();
const { v4: uuidv4 } = require("uuid"); 
const fs = require('fs');
const path = require('path');

getNotes.get('/', (req, res) => { // this should retrieve the notes from the db.json file.
  const data = fs.readFileSync('./db/db.json', 'utf8'); //readFileSync is a synchronous method that reads the contents of a file.
  res.json(JSON.parse(data)); // this should return the data in json format and parse it.
});



getNotes.get('/:id', (req, res) => {
  const data = fs.readFileSync('./db/db.json', 'utf8');
  const notes = JSON.parse(data);
  const note = notes.find((n) => n.id === req.params.id);
  res.json(note);
}); // this should retrieve a single note from the db.json file.

//TODO: Determine if error logging is needed for this route. Best to wait after the POST route is working.



// getNotes.get('/', (req, res) => {
//     const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'db', 'db.json')));
//     res.json(JSON.parse(notes));
//   });
  

// getNotes.get('/', (req, res) => {
//     fs.readFromFile('./db/db.json', 'utf8').then((data) => 
//     res.json(JSON.parse(data))
//     );
// });


module.exports = getNotes;


// I realized that I was not using the path name that I defined in the combinedRoutes.js
// so for this path, use /api/getNotes