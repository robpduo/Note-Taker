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


function deleteNote(id, notesData) {
    const updateList = notesData.filter(note => note.id === id);
    console.log(updateList);

    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({notes: notesData}, null, 2)
    );
}

module.exports = {
    createNewNote,
    deleteNote
}