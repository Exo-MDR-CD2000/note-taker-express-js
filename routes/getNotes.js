//define the GET route for retrieving notes. // let's just make this file retrieve the notes from the db.json file.

const getNotes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

getNotes.get("/", (req, res) => { // this should retrieve the notes from the db.json file.
  const data = fs.readFileSync("./db/db.json", "utf8"); //readFileSync is a synchronous method that reads the contents of a file.
  res.json(JSON.parse(data)); // this should return the data in json format and parse it.
});


// above line of code is most likely not right. Wait until Monday for the review on the mini project.