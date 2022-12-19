const router = require('express').Router();

router.get('/',(req, res) => {
    // get all notes from the db file
    res.json(`GOT YOUR ${req.method} REQUEST!!`);
});

router.post('/',(req, res) => {
    // add notes to the db 
    res.json(`GOT YOUR ${req.method} REQUEST!!`);
});

// BOUNS - BE ABLE TO DELETE REQUEST

module.exports = router;
