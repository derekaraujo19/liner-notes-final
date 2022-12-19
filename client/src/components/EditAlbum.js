import React, { useState } from "react";

function EditAlbum({setIsEditing, album, handleUpdateAlbum}) {
  const [title, setTitle] = useState(album.title);
  const [artist, setArtist] = useState(album.artist);
  const [artwork, setArtwork] = useState(album.artwork_url);
  const [releaseDate, setReleaseDate] = useState(album.release_date);
  const [genre, setGenre] = useState(album.genre);
  const [errors, setErrors] = useState([]);
  // const [spotify, setSpotify] = useState("");

  function handleUpdateSubmit(e) {
    e.preventDefault();
    let updatedAlbumData = {
      "title": title,
      "artist": artist,
      "artwork_url": artwork,
      "release_date": releaseDate,
      "genre": genre
      // "spotify_link": spotify
    };
    fetch(`/api/albums/${album.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAlbumData)
    })
    .then(r => {
      if(r.ok) {
        r.json().then((updatedAlbum) => handleUpdateAlbum(updatedAlbum));
        setIsEditing(false);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <div className="Edit">
      <form onSubmit={handleUpdateSubmit}>
        <label className="new-item">
          <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} autoComplete="off" />
        </label>
        <label className="new-item">
          <input type="text" value={artist} placeholder="Artist" onChange={(e) => setArtist(e.target.value)} autoComplete="off" />
        </label>
        <label className="new-item">
          <input type="text" value={artwork} placeholder="Artwork URL" onChange={(e) => setArtwork(e.target.value)} autoComplete="off" />
        </label>
          {/* <input type="text" value={spotify} placeholder="Spotify Link (optional)" onChange={(e) => setSpotify(e.target.value)} autoComplete="off" /> */}
        <label className="new-item">
          <input type="text" value={releaseDate} placeholder="Release Date (YYYY)"  maxLength="4" onChange={(e) => setReleaseDate(e.target.value)} autoComplete="off" />
        </label>
        <label className="new-item">
          <input type="text" value={genre} placeholder="Genre (optional)" onChange={(e) => setGenre(e.target.value)} autoComplete="off" />
        </label>
        <label className="new-item">
          <button className="button" id="card-button"> SAVE </button>
        </label>
      </form>
      <div>
        {errors ? errors.map((error) => (
          <ul key={error} className="Errors">{error}</ul>
        )) : ""}
      </div>
      <button className="button" id="card-button" onClick={() => setIsEditing(false)}> EXIT </button>
    </div>
  );
}

export default EditAlbum;
