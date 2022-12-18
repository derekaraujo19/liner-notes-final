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
      <button onClick={showAddNoteForm}> Add Note </button>
      <h2> Add a Note to Get Started </h2>
    </div>
  );

  return (
    <div className="Lists">
      <button onClick={showAddNoteForm}> Add Note </button>
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