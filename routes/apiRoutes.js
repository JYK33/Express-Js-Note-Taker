const router = require('express').Router();
const uuid = require('../randomId/uuid');
const fs = require('fs');


router.get('/',(req, res) => {
    // get all notes from the db file
    console.log(`GOT YOUR ${req.method} REQUEST!!`);
    const dataFromJson = fs.readFileSync('./db/db.json', 'utf8');
    res.json(JSON.parse(dataFromJson));
});

router.post('/',(req, res) => {
    // add notes to the db 
    console.log(`GOT YOUR ${req.method} REQUEST!!`);
    const {title, text} = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
    const currentNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    currentNotes.push(newNote);
    
    fs.writeFile('./db/db.json', JSON.stringify(currentNotes), (err) => err
    ? console.err(err)
    : console.log(`Note for ${newNote.title} has been taken`)
    );
    const response = {
        status: 'Notes Saved',
        boby: newNote,
    };

    console.log(response)
    res.status(201).json(response);
    } else {
        res.status(500).json('The notes were not saved!')
    }

});

// BOUNS - BE ABLE TO DELETE REQUEST

module.exports = router;
