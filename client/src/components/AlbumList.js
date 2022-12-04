import React, { useState, useEffect } from "react";
import Album from "./Album";

function AlbumList() {
  const [albums, setAlbums] = useState([])

  // Get Album List
  useEffect(() => {
    fetch('/albums')
      .then((r) => r.json())
      .then((albums) => setAlbums(albums));
  }, []);

  // Search


  return (
    <div>
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