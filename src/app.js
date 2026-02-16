const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("home page");
});

const notes = [];


app.get("/notes", (req, res)=>{
    res.send(notes)
})

app.get("/notes/:id", (req, res)=>{
    const id = req.params.id;
    const note = notes[id];
    res.status(200).json({
        note: notes
    })

})

app.post('/notes', (req, res) => {
    notes.push(req.body)
    res.status(201).json({ message: "Note created successfully!" });
});

module.exports = app;
