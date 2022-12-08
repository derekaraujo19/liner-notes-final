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

  // Add Song Form
  function showAddAlbumForm(){
    setShowAddAlbum(true)
  };

  if(showAddAlbum) return <AddAlbum setShowAddAlbum={setShowAddAlbum}/>

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