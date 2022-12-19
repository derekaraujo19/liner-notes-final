import React, { useState, useEffect } from "react";

function EditSong({song, setIsEditing, handleUpdateSong}) {
  const [name, setName] = useState(song.name);
  const [album_id, setAlbum_Id] = useState(song.album_id);
  const [artist, setArtist] = useState(song.artist);
  // const [spotify_link, setSpotify_Link] = useState(song.spotify_link);
  const [is_writer, setIs_Writer] = useState(song.is_writer);
  const [is_performer, setIs_Performer] = useState(song.is_performer);
  const [is_producer, setIs_Producer] = useState(song.is_producer);
  const [is_engineer, setIs_Engineer] = useState(song.is_engineer);
  const [albums, setAlbums] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleUpdateSubmit(e) {
    e.preventDefault();
    let updatedSongData = {
      "name": name,
      "album_id": album_id,
      "artist": artist,
      // "spotify_link": spotify_link,
      "is_writer": is_writer,
      "is_performer": is_performer,
      "is_producer": is_producer,
      "is_engineer": is_engineer
    };
    fetch(`/api/songs/${song.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSongData)
    })
    .then(r => {
      if(r.ok) {
        r.json().then((updatedSong) => handleUpdateSong(updatedSong))
        setIsEditing(false)
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  // Retrieve albums for select
  useEffect(() => {
    fetch('/api/albums')
      .then((r) => r.json())
      .then((albums) => setAlbums(albums));
  }, []);


  return (
    <div>
      <form onSubmit={handleUpdateSubmit}>
        <label>
          <input type="text" name="name" placeholder="Song Name" value={name} onChange={(e) => setName(e.target.value)}/>

          <select className="album-select" placeholder="Choose Album" value={album_id ? album_id : ""} onChange={(e) => setAlbum_Id(e.target.value)}>
              <option disabled={true} value="">-Choose an Album-</option>
              {albums.map((album) => (
                <option key={album.id} value={album.id}>{album.title}</option>
              ))}
          </select>

          <input type="text" name="artist" placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)}/>

          {/* <input type="text" name="spotify" placeholder="Spotify Link" value={spotify_link} onChange={(e) => setSpotify_Link(e.target.value)} /> */}

          <input type="checkbox" name="writer" value={is_writer} onChange={(e) => setIs_Writer(!is_writer)}  checked={is_writer ? true : false}/>
          <label> Writer </label>

          <input type="checkbox" name="performer" value={is_performer} onChange={(e) => setIs_Performer(!is_performer)} checked={is_performer ? true : false}/>
          <label> Performer </label>

          <input type="checkbox" name="producer" value={is_producer} onChange={(e) => setIs_Producer(!is_producer)} checked={is_producer ? true : false}/>
          <label> Producer </label>

          <input type="checkbox" name="engineer" value={is_engineer} onChange={(e) => setIs_Engineer(!is_engineer)} checked={is_engineer ? true : false} />
          <label> Engineer </label>
          <button className="button" id="card-button"> SAVE </button>
        </label>
      </form>
      <div>
        {errors ? errors.map((error) => (
          <ul key={error} className="Errors">{error}</ul>
        )) : ""}
      </div>
      <button className="button"  onClick={() => setIsEditing(false)}> EXIT </button>
    </div>
  );
}

export default EditSong;


