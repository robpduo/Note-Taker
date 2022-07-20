const fs = require('fs');
const path = require('path');

function createNewNote(note, notesData) {
    const notes = note;
    notesData.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify( {notes: notesData}, null, 2)
    );

    return notes;
}

module.exports = {
    createNewNote
}