import React, {useState, useEffect} from "react";

function AddSong({setShowAddSong, addNewSong}) {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  // const [spotify, setSpotify] = useState("");
  const [is_writer, setIs_Writer] = useState(false);
  const [is_performer, setIs_Performer] = useState(false);
  const [is_producer, setIs_Producer] = useState(false);
  const [is_engineer, setIs_Engineer] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [album_id, setAlbum_Id] = useState("");
  const [errors, setErrors] = useState([]);

  // Retrieve albums for select
  useEffect(() => {
    fetch('/api/albums')
      .then((r) => r.json())
      .then((albums) => setAlbums(albums));
  }, []);


  // Submit New Song
  function handleAddSongSubmit(e) {
    e.preventDefault();
    let newSongData = {
      "name": name,
      "artist": artist,
      // "spotify_link": spotify,
      "is_writer": is_writer,
      "is_performer": is_performer,
      "is_producer": is_producer,
      "is_engineer": is_engineer,
      "album_id": album_id
    };
    fetch("/api/songs", {
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
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <div className="Forms">
      <form onSubmit={handleAddSongSubmit}>
        {/* Song Form */}
        <label>
          <input type="text" name="name" placeholder="Song Name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off"/>
          <input type="text" name="artist" placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} autoComplete="off"/>
          {/* <input type="text" name="spotify_url" placeholder="Spotify Link (optional)" value={spotify} onChange={(e) => setSpotify(e.target.value)} autoComplete="off"/> */}
        </label>
        <h4>Optional</h4>
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


        {/* Album Form */}
          <h4> Album: </h4>
          <select className="album-select" placeholder="Choose Album" value={album_id} onChange={(e) => setAlbum_Id(e.target.value)}>
            <option disabled={true} value="">-Choose an Album-</option>
            {albums.map((album) => (
              <option key={album.id} value={album.id}>{album.title}</option>
            ))}
          </select>
          <button className="button" id="card-button"> ADD SONG </button>
        </label>
      </form>
      <div>
        {errors ? errors.map((error) => (
          <ul key={error} className="Errors">{error}</ul>
        )) : ""}
      </div>
      <button className="button" onClick={() => setShowAddSong(false)}> RETURN TO TRACKLIST </button>
    </div>
  );
}

export default AddSong;