const router = require('express').Router();

router.post('/notes', (req, res) => {
    console.log("api/notes found");
});

module.exports = router;