const fs = require('fs');


var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return []
  }
};

var saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}


// COMMANDS

var addNote = (title, body) => {

  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  duplicateNotes = notes.filter((note) => note.title === title)

  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes)
    return note;

  } else {

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
