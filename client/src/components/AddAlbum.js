import React, {useState} from "react";

function AddAlbum({setShowAddAlbum, addNewAlbum}) {
  const [title, setTitle] = useState("");
  const [artwork,setArtwork] = useState("");
  const [artist, setArtist] = useState("");
  const [spotify, setSpotify] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  const [errors, setErrors] = useState([]);


  // Submit New Album
  function handleAddAlbumSubmit(e) {
    e.preventDefault();
    let newAlbumData = {
      "title": title,
      "artwork_url": artwork,
      "artist": artist,
      "spotify_link": spotify,
      "release_date": releaseDate,
      "genre": genre
    };
    fetch("/api/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAlbumData)
    })
    .then(r => {
      if(r.ok) {
        r.json().then((newAlbum) => addNewAlbum(newAlbum));
        e.target.reset();
        setShowAddAlbum(false);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <div>
      <form onSubmit={handleAddAlbumSubmit}>
        <label>
          <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} autoComplete="off" />
          <input type="text" value={artist} placeholder="Artist" onChange={(e) => setArtist(e.target.value)} autoComplete="off" />
          <input type="text" value={artwork} placeholder="Artwork URL" onChange={(e) => setArtwork(e.target.value)} autoComplete="off" />
          <input type="text" value={spotify} placeholder="Spotify Link (optional)" onChange={(e) => setSpotify(e.target.value)} autoComplete="off" />
          <input type="text" value={releaseDate} placeholder="Release Date (YYYY)"  maxLength="4" onChange={(e) => setReleaseDate(e.target.value)} autoComplete="off" />
          <input type="text" value={genre} placeholder="Genre (optional)" onChange={(e) => setGenre(e.target.value)} autoComplete="off" />
          <button> Add Album </button>
        </label>
      </form>
      <div>
        {errors ? errors.map((error) => (
          <ul key={error} className="Errors">{error}</ul>
        )) : ""}
      </div>
      <button onClick={() => setShowAddAlbum(false)}> Return to Albums </button>
    </div>
  );
}

export default AddAlbum;