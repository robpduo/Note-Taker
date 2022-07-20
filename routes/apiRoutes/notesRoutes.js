const router = require('express').Router();
const { createNewNote, deleteNote, readNote } = require('../../lib/notes');
const path = require('path');

// read from file, send as a response on get request
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../../db/db.json"));
});

/* Writes the new note to file */
router.post('/notes', (req, res) => {
    let notes = readNote();
    req.body.id = `${Math.floor(Math.random() * 10000)}`;
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    let notes = readNote();
    const newList = deleteNote(req.params.id, notes);
    res.json(newList);
}); 

module.exports = router;