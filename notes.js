const fs = require('fs');


var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };


  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString)
  } catch(e) {

  }

  duplicateNotes = notes.filter((note) => note.title === title)

  if(duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));

  } else {
    console.log('Title already exists');
  }

};

var getAll = () => {
  console.log('getAll');
};

var getNote = (title) => {
  console.log('getNote');
};

var removeNote = (title, body) => {
  console.log('removeNote');
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
