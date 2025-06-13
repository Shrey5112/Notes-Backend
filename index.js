const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let notes = [];
let id = 1;

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id == req.params.id);
  if (note) res.json(note);
  else res.status(404).json({ error: "Note not found" });
});

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const note = {
    id: id++,
    title,
    content,
    createdAt: new Date().toISOString(),
    updatedAt: null
  };

  notes.push(note);
  res.status(201).json(note);
});

app.put("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notes.find(n => n.id === noteId);

  if (!note) return res.status(404).json({ error: "Note not found" });

  const { title, content } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  note.title = title;
  note.content = content;
  note.updatedAt = new Date().toISOString(); // replace timestamp

  res.json(note);
});

app.delete("/notes/:id", (req, res) => {
  notes = notes.filter((n) => n.id != req.params.id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));

