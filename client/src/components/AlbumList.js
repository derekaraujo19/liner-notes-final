import React, { useState, useEffect } from "react";
import Album from "./Album";
import AddAlbum from "./AddAlbum";

function AlbumList() {
  const [albums, setAlbums] = useState([])
  const [showAddAlbum, setShowAddAlbum] = useState(null);

  // Get Album List
  useEffect(() => {
    fetch('/api/albums')
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

  // Update Album in DOM
  function handleUpdateAlbum(updatedAlbum) {
    const updatedAlbums = albums.map((album) => {
      if (album.id === updatedAlbum.id) {
        return updatedAlbum
      } else {
        return album;
      }
    });
    setAlbums(updatedAlbums);
  };

  // Delete Album from DOM
  function handleDeleteAlbum(id) {
    const updatedAlbums = albums.filter((album) => album.id !== id);
    setAlbums(updatedAlbums)
  };

  if(showAddAlbum) return <AddAlbum setShowAddAlbum={setShowAddAlbum} addNewAlbum={addNewAlbum} />

  if(albums.length === 0) return (
    <div>
      <h2 className="No-Content"> No Albums Yet! Click Add Album to Get Started </h2>
      <button className="button" onClick={showAddAlbumForm}> ADD ALBUM </button>
    </div>
  );

  return (
    <div className="Lists">
      <button className="button" onClick={showAddAlbumForm}> ADD ALBUM </button>
      {albums.map((album) => (
        <Album
          key={album.id}
          album={album}
          handleDeleteAlbum={handleDeleteAlbum}
          handleUpdateAlbum={handleUpdateAlbum}
        />
      ))}
    </div>
  );
}

export default AlbumList;