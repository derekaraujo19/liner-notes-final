import React, {useState, useEffect} from "react";

function AddNote({setShowAddNotes, addNewNote}) {
  const [text, setText] = useState("")
  const [songs, setSongs] = useState([]);
  const [song_id, setSong_Id] = useState("")


  // Retrieve songs
  useEffect(() => {
    fetch('/api/songs')
      .then((r) => r.json())
      .then((songs) => setSongs(songs));
  }, []);

  // console.log(songs)

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
        r.json().then((err) => console.log(err.errors));
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
          <button> Add Note </button>
        </label>
      </form>
      <button onClick={() => setShowAddNotes(false)}> Return to Notes </button>
    </div>
  );
}

export default AddNote;


