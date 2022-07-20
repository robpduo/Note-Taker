const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../data/notes.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

/* Writes the new note to file */
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;