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


  console.log(albums)
  // Search Albums

  // Add Album Form
  function showAddAlbumForm(){
    setShowAddAlbum(true)
  };

  // Add Album to DOM
  function addNewAlbum(newAlbum) {
    setAlbums([newAlbum, ...albums]);
  };

  if(showAddAlbum) return <AddAlbum setShowAddAlbum={setShowAddAlbum} addNewAlbum={addNewAlbum} />

  return (
    <div>
      <button onClick={showAddAlbumForm}> Add Album </button>
      {albums.map((album) => (
        <Album
          key={album.id}
          album={album}
        />
      ))}
    </div>
  );
}

export default AlbumList;