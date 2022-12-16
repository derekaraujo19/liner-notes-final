import React, { useState, useEffect } from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [showAddNotes, setShowAddNotes] = useState(false);

  // Get Notes
  useEffect(() => {
    fetch('/notes')
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

  if(showAddNotes) return <AddNote setShowAddNotes={setShowAddNotes} addNewNote={addNewNote}/>

  return (
    <div className="Lists">
      <button onClick={showAddNoteForm}> Add Note </button>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
        />
      ))}
    </div>
  );
}

export default Notes;