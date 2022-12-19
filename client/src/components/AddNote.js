import React, {useState, useEffect} from "react";

function AddNote({setShowAddNotes, addNewNote}) {
  const [text, setText] = useState("")
  const [songs, setSongs] = useState([]);
  const [song_id, setSong_Id] = useState("");
  const [errors, setErrors] = useState([]);


  // Retrieve songs
  useEffect(() => {
    fetch('/api/songs')
      .then((r) => r.json())
      .then((songs) => setSongs(songs));
  }, []);



  // Submit new note
  function handleAddNoteSubmit(e) {
    e.preventDefault();
    let newNoteData = {
      "text": text,
      "song_id": song_id
    };
    fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNoteData)
    })
    .then(r => {
      if(r.ok) {
        r.json().then((newNote) => addNewNote(newNote));
        e.target.reset();
        setShowAddNotes(false);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }



  return (
    <div className="Forms">
      <form onSubmit={handleAddNoteSubmit}>
        {/* Song Select */}
        <label>
          <select className="song-select" placeholder="Choose A Song" value={song_id} onChange={(e) => setSong_Id(e.target.value)}>
            <option disabled={true} value=""> -Choose a Song- </option>
            {songs.map((song) => (
              <option key={song.id} value={song.id}>{song.name}</option>
            ))}
          </select>
          {/* Text */}
          <textarea name="text" placeholder="New Note" style={{width:"350px", height:"120px", resize: "none"}}value={text} onChange={(e) => setText(e.target.value)}/>
          <button className="button" id="card-button"> ADD NOTE </button>
        </label>
      </form>
      <div>
        {errors ? errors.map((error) => (
          <ul key={error} className="Errors">{error}</ul>
        )) : ""}
      </div>
      <button className="button" onClick={() => setShowAddNotes(false)}> RETURN TO NOTES </button>
    </div>
  );
}

export default AddNote;


