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
    <div>
      <h1>{song.name}</h1>
      {song.album ? <ul>on <em>{song.album.title}</em></ul> : ""}
      {/* {song.album ? <img src={song.album.artwork_url} alt="Album Artwork" width="75" height="75"/> : ""} */}
      <ul>by {song.artist}</ul>
      <ul>{song.spotify_link}</ul>
      {song.is_writer ? <ul>Writer</ul> : ""}
      {song.is_performer ? <ul>Performer</ul> : ""}
      {song.is_producer ? <ul>Producer</ul> : ""}
      {song.is_engineer ? <ul>Engineer</ul> : ""}
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



