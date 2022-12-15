import React, { useState, useEffect } from "react";
import Album from "./Album";
import AddAlbum from "./AddAlbum";

function AlbumList() {
  const [albums, setAlbums] = useState([])
  const [showAddAlbum, setShowAddAlbum] = useState(null);

  // Get Album List
  useEffect(() => {
    fetch('/albums')
      .then((r) => r.json())
      .then((albums) => setAlbums(albums));
  }, []);

  // Search Albums

  // Add Album Form
  function showAddAlbumForm(){
    setShowAddAlbum(true)
  };

  // Add Album to DOM
  function addNewAlbum(newAlbum) {
    setAlbums([newAlbum, ...albums]);
  };

  // Delete Album from DOM
  function handleDeleteAlbum(id) {
    const updatedAlbums = albums.filter((album) => album.id !== id);
    setAlbums(updatedAlbums)
  }

  if(showAddAlbum) return <AddAlbum setShowAddAlbum={setShowAddAlbum} addNewAlbum={addNewAlbum} />

  return (
    <div>
      <button onClick={showAddAlbumForm}> Add Album </button>
      {albums.map((album) => (
        <Album
          key={album.id}
          album={album}
          handleDeleteAlbum={handleDeleteAlbum}
        />
      ))}
    </div>
  );
}

export default AlbumList;