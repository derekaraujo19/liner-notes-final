import React, {useState} from "react";

function AddAlbum({setShowAddAlbum, addNewAlbum}) {
  const [title, setTitle] = useState("");
  const [artwork,setArtwork] = useState("");
  const [artist, setArtist] = useState("");
  // const [spotify, setSpotify] = useState("");
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
      // "spotify_link": spotify,
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
    <div >
      <form onSubmit={handleAddAlbumSubmit}>
        <label className="new-item">
          <input type="text" value={title} placeholder="Title*" onChange={(e) => setTitle(e.target.value)} autoComplete="off" />
        </label>
        <label className="new-item">
          <input type="text" value={artist} placeholder="Artist*" onChange={(e) => setArtist(e.target.value)} autoComplete="off" />
        </label>
        <label className="new-item">
          <input type="text" value={artwork} placeholder="Artwork URL*" onChange={(e) => setArtwork(e.target.value)} autoComplete="off" />
        </label>
          {/* <input type="text" value={spotify} placeholder="Spotify Link (optional)" onChange={(e) => setSpotify(e.target.value)} autoComplete="off" /> */}
        <label className="new-item">
          <input type="text" value={releaseDate} placeholder="Release Date (YYYY)*"  maxLength="4" onChange={(e) => setReleaseDate(e.target.value)} autoComplete="off" />
        <label className="new-item">
          <input type="text" value={genre} placeholder="Genre" onChange={(e) => setGenre(e.target.value)} autoComplete="off" />
        </label>
          <button className="button" id="card-button"> ADD ALBUM </button>
        </label>
      </form>
      <div>
        {errors ? errors.map((error) => (
          <ul key={error} className="Errors">{error}</ul>
        )) : ""}
      </div>
      <button className="button" id="card-button" onClick={() => setShowAddAlbum(false)}> RETURN TO ALBUMS </button>
    </div>
  );
}

export default AddAlbum;