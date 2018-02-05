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

var printNote = (note) => {
  console.log(`Tile: ${note.title}`);
  console.log(`Body: ${note.body}`);
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
    notes = fetchNotes();
    note = notes.filter((note) => note.title === title)
    return note[0];
    }

var removeNote = (title, body) => {
  notes = fetchNotes();

  filteredNotes = notes.filter((note) => note.title != title)

  if(notes.length != filteredNotes.length) {
    saveNotes(filteredNotes)
    return true
  } else {
    return false
  }

};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  printNote
}
