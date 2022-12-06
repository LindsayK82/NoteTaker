const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get("/notes", (req, res) => {
    const saveNotes = JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"), "utf-8"));
    console.log(saveNotes);
    res.json(saveNotes);
});

router.post("/notes", (req, res) => {
    const saveNotes = JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"), "utf-8"));
    console.log(req.body);
    saveNotes.push(req.body);
    fs.writeFileSync(path.join(__dirname,"../db/db.json"), JSON.stringify(saveNotes));
    res.json(saveNotes);
});







module.exports = router