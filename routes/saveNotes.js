//define the POST route for saving notes.

const saveNotes = require('express').Router();

const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require("uuid");
const existingNotes = require('./getNotes');
// the mini project didn't bring in code from other files besides the main route file.




//forgot to import the getNotes route.


//let's retrieve the notes from the db.json file.

saveNotes.get('/', (req, res) => {
    const data = fs.readFileSync('./db/db.json', 'utf8');
    res.json(JSON.parse(data));
});


// now I need to deconstruct the json data, add a unique id to the note, then add the new note to the existing notes.


saveNotes.post('/', (req, res) => {
    console.log(req.body);
    
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            noteId: uuidv4()
        };

        const notesData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        notesData.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(notesData), (err) => {
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

// the code works but it is not being shown on the front end. I need to figure out how to get the notes to show up on the front end.

module.exports = saveNotes;
//function above not working. Wait until Monday to ask for help.






// saveNotes.post('/', (req, res) => {
    
//     const { title, text } = req.body;

//     if (title && text) {
        
//         const newNote = {
//             title,
//             text,
//             noteId: uuidv4()
//         };

//         fs.writeFile('./db/db.json', JSON.stringify(newNote), (err) => {
//             if (err) throw err;
//             console.log('Note added!');
//         });

//         const response = {
//             status: 'success',
//             body: newNote,
//         };

//         res.json(response);
//     } else {
//         res.json('Error in posting note');
//     }
// });



// saveNotes.post('/', (req, res) => {
//     console.log(req.body);
    
//     const { title, text } = req.body;

//     if (title && text) {
        
//         const newNote = {
//             title,
//             text,
//             noteId: uuidv4()
//         };

//         existingNotes.push(newNote);

//         fs.writeFile('./db/db.json', JSON.stringify(existingNotes), (err) => {
//             if (err) throw err;
//             console.log('Note added!');
//         });

//         const response = {
//             status: 'success',
//             body: newNote
//         };

//         res.json(response);

//     } else {
//         const response = {
//             status: 'error',
//             message: 'Please provide a title and text for the note.'
//         };

//         res.status(400).json(response);
//     }
// });