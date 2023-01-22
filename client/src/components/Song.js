import React, {useState} from "react";
import EditSong from "./EditSong";

function Song({song, handleDeleteSong, handleUpdateSong}) {
  const [isEditing, setIsEditing] = useState(false);



  // Delete Song
  function handleDeleteSubmit(){
    fetch(`/api/songs/${song.id}`, {
      method: "DELETE"
    });
    handleDeleteSong(song.id)
  };


  return (
    <div>
      <div id="song">
        <div className="credits">
          <h1>"{song.name}"</h1>
          <h4>{song.is_writer ? " Writer " : ""} {song.is_performer ? " Performer " : ""} {song.is_producer ? " Producer " : ""} {song.is_engineer ? " Engineer " : ""}</h4>
        </div>
        {song.artist ? <h3>by {song.artist}</h3> : ""}
        {song.album ? <h3>on <em>{song.album.title}</em> ({song.album.release_date})</h3> : "ALBUM N/A"}
        {song.album ? <img src={song.album.artwork_url} alt="Album Artwork" width="75" height="75"/> : ""}
        {/* <ul>{song.spotify_link}</ul> */}

      </div>
      <div>
        {isEditing ? (
          <EditSong song={song} setIsEditing={setIsEditing} handleUpdateSong={handleUpdateSong}/>
        ) : (
          <button className="button" id="card-button" onClick={() => setIsEditing(true)}> EDIT </button>
        )}
        <button className="button" id="card-button" onClick={handleDeleteSubmit}>
          <div role="img" aria-label="delete"> 🗑 </div>
        </button>
      </div>
    </div>

  );
}

export default Song;



