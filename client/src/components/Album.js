import React, { useState } from "react";
import EditAlbum from "./EditAlbum";

function Album({album, handleDeleteAlbum, handleUpdateAlbum}) {
  const [isEditing, setIsEditing] = useState(false);

  // Delete Album
  function handleDeleteSubmit(){
    fetch(`/api/albums/${album.id}`, {
      method: "DELETE"
    });
    handleDeleteAlbum(album.id)
  };

  return (
    <div className="AlbumList">
      <h1><em>{album.title}</em> {album.release_date ? `(${album.release_date})` : ""}</h1>
      <h2>{album.artist}</h2>
      <h4>{album.genre}</h4>
      <img src={album.artwork_url} alt="Album Artwork" width="400" height="400"/>
      <h3> Songs: </h3>
      {album.songs.map(song => <h4 key={song.id}>{song.name}</h4>)}
      {isEditing ? (
        <EditAlbum setIsEditing={setIsEditing} album={album} handleUpdateAlbum={handleUpdateAlbum}/>
        ) : (
        <button onClick={() => setIsEditing(true)}> Edit </button>
      )}
      <button onClick={handleDeleteSubmit}>
        <div role="img" aria-label="delete"> 🗑 </div>
      </button>
    </div>

  );
}

export default Album;