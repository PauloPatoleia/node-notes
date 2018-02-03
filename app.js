console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

var argv = yargs.argv
var command = process.argv[2];
console.log(`Command: ${command}`);

if(command === 'add') {

  var note = notes.addNote(argv.title, argv.body)

  try {
    console.log(`Tile: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } catch(e) {
    console.log("Title already exist's");
  }

} else if (command === 'list') {

  notes.getAll()

} else if (command === 'read') {

  notes.getNote(argv.title)

} else if (command === 'remove') {

  notes.removeNote(argv.title)

} else {
  console.log('Command not recognized');
}
