const fs = require('fs');
const path = require('path');

function createNewNote(note, notesData) {
    const notes = note;
    notesData.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesData, null, 2)
    );
}

function deleteNote(id, notesData) {
    notesData = notesData.filter(note => note.id != id);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesData, null, 2)
    );
    return JSON.stringify(notesData);
}

function readNote( ) {
    let notes = JSON.parse(fs.readFileSync("db/db.json"));
    return notes;
}

module.exports = {
    createNewNote,
    deleteNote,
    readNote
}