import React, { useState, useEffect } from "react";
import Note from "./Note";

function Notes() {
  const [notes, setNotes] = useState([]);

  // Get Notes
  useEffect(() => {
    fetch('/notes')
      .then((r) => r.json())
      .then((notes) => setNotes(notes))
  }, []);


  return (
    <div>
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