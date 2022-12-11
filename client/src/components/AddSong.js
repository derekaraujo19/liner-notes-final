import React, {useState} from "react";

function AddSong({setShowAddSong, addNewSong}) {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [spotify, setSpotify] = useState("");
  // Add release_date ?
  const [is_writer, setIs_Writer] = useState(false);
  const [is_performer, setIs_Performer] = useState(false);
  const [is_producer, setIs_Producer] = useState(false);
  const [is_engineer, setIs_Engineer] = useState(false);

  // Submit New Song
  function handleAddSongSubmit(e) {
    e.preventDefault();
    let newSongData = {
      "name": name,
      "artist": artist,
      "spotify_link": spotify,
      "is_writer": is_writer,
      "is_performer": is_performer,
      "is_producer": is_producer,
      "is_engineer": is_engineer
    };
    fetch("/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSongData)
    })
    .then(r => {
      if(r.ok) {
        r.json().then((newSong) => addNewSong(newSong));
        e.target.reset();
        setShowAddSong(false);
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  // Return user to tracklist
  function returnToTrackList(){
    setShowAddSong(false);
  };

  return (
    <div className="Forms">
      <form onSubmit={handleAddSongSubmit}>
        {/* Song Form */}
        <label>
          <input type="text" name="name" placeholder="Song Name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off"/>
          <input type="text" name="artist" placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} autoComplete="off"/>
          <input type="text" name="spotify_url" placeholder="Spotify Link" value={spotify} onChange={(e) => setSpotify(e.target.value)} autoComplete="off"/>
        </label>

        {/* Involvement Form */}
        <label>
          <h4> Involvement: </h4>
          <input type="checkbox" name="writer" value={is_writer} onChange={(e) => setIs_Writer(!is_writer)} />
          <label> Writer </label>
          <input type="checkbox" name="performer" value={is_performer} onChange={(e) => setIs_Performer(!is_performer)} />
          <label> Performer </label>
          <input type="checkbox" name="producer" value={is_producer} onChange={(e) => setIs_Producer(!is_producer)}/>
          <label> Producer </label>
          <input type="checkbox" name="engineer" value={is_engineer} onChange={(e) => setIs_Engineer(!is_engineer)} />
          <label> Engineer </label>
        </label>
        {/* Album Form */}
        <label>
          <h4>Select Album!!</h4>
        </label>
        <button> Add Song </button>
      </form>
      <button onClick={returnToTrackList}> Return to Tracklist </button>
    </div>
  );
}

export default AddSong;