import React, { useState, useEffect } from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [showAddNotes, setShowAddNotes] = useState(false);

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

  if(showAddNotes) return <AddNote setShowAddNotes={setShowAddNotes} addNewNote={addNewNote}/>

  if(notes.length === 0) return (
    <div>
      <h2 className="No-Content"> Add a Note to Get Started </h2>
      <button className="button" onClick={showAddNoteForm}> ADD NOTE </button>
    </div>
  );

  return (
    <div className="Lists">
      <button className="button"onClick={showAddNoteForm}> ADD NOTE </button>
      {notes.map((note) => (
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