const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../data/notes.json');

// read from file, send as a response on get request
router.get('/notes', (req, res) => {
    res.json(notes);
});

/* Writes the new note to file */
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
});


router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
}); 

router.get('/notes/:id', (req, res) => {
    res.json(notes);
});

module.exports = router;