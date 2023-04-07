import React, { useState, useEffect } from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [showAddNotes, setShowAddNotes] = useState(false);
  const [search, setSearch] = useState("");

  // Get Notes
  useEffect(() => {
    fetch('/api/notes')
      .then((r) => r.json())
      .then((notes) => setNotes(notes))
  }, []);

  // Show Add Note Form
  function showAddNoteForm(){
    setShowAddNotes(true)
  };

  // Add New Note to DOM
  function addNewNote(newNote) {
    setNotes([newNote, ...notes]);
  };

  // Delete Note from DOM
  function handleDeleteNote(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  // Search Notes

  // const songName = notes.map((note) => note.song.name);
  const displayedNotes = notes.filter((note) =>
  note.song.name.toLowerCase().includes(search.toLowerCase())
  );

  if(showAddNotes) return <AddNote setShowAddNotes={setShowAddNotes} addNewNote={addNewNote}/>

  if(notes.length === 0) return (
    <div>
      <h2 className="No-Content"> Add a Note to Get Started </h2>
      <button className="button" onClick={showAddNoteForm}> ADD NOTE </button>
    </div>
  );

  return (
    <div className="Lists">
      <div className="SearchBox">
        <input
          type="text"
          name="search"
          placeholder="search by song"
          autoComplete="off"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <button className="button"onClick={showAddNoteForm}> ADD NOTE </button>
      {displayedNotes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
}

export default Notes;