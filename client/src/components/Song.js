import React, {useState} from "react";
import EditSong from "./EditSong";

function Song({song, handleDeleteSong, handleUpdateSong}) {
  const [isEditing, setIsEditing] = useState(false);

  // Delete Song
  function handleDeleteSubmit(){
    fetch(`/songs/${song.id}`, {
      method: "DELETE"
    });
    handleDeleteSong(song.id)
  };


  return (
    <div className="Song">
      <h1>"{song.name}"</h1>
      <h2>{song.artist}</h2>
      {song.album ? <h3><em>{song.album.title}</em></h3> : ""}
      {song.album ? <img src={song.album.artwork_url} alt="Album Artwork" width="75" height="75"/> : ""}
      <ul>{song.spotify_link}</ul>
      {song.is_writer ? <h4>Writer</h4> : ""}
      {song.is_performer ? <h4>Performer</h4> : ""}
      {song.is_producer ? <h4>Producer</h4> : ""}
      {song.is_engineer ? <h4>Engineer</h4> : ""}
      {isEditing ? (
        <EditSong song={song} setIsEditing={setIsEditing} handleUpdateSong={handleUpdateSong}/>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={handleDeleteSubmit}>
        <div role="img" aria-label="delete"> 🗑 </div>
      </button>
    </div>
  );
}

export default Song;



