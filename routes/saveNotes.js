//define the POST route for saving notes.

const saveNotes = require('express').Router();

const fs = require('fs');
// const path = require('path');
const { v4: uuidv4 } = require("uuid");
// const existingNotes = require('./getNotes');




//let's retrieve the notes from the db.json file.

// saveNotes.get('/', (req, res) => {
//     const data = fs.readFileSync('./db/db.json', 'utf8');
//     res.json(JSON.parse(data));
// });


//TODO: use the paths defined in the index.js file and it should make the front end work.

// now I need to deconstruct the json data, add a unique id to the note, then add the new note to the existing notes.


saveNotes.post('/', (req, res) => {
    console.log(req.body);
    
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };

        const notesData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        notesData.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(notesData, null, 2), (err) => { // the null, 2 is for formatting the json data. The null is for the replacer parameter and the 2 is for the space parameter.
            if (err) throw err;
            console.log('Note added!');
        });

        const response = {
            status: 'success',
            body: newNote
        };

        res.json(response);

    } else {
        const response = {
            status: 'error',
            message: 'Please provide a title and text for the note.'
        };

        res.status(400).json(response);
    }
});



module.exports = saveNotes;

