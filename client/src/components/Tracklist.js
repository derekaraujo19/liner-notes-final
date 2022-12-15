import React, { useEffect, useState } from "react";
import Song from "./Song";
import AddSong from "./AddSong";

function Tracklist() {
  const [songs, setSongs] = useState([]);
  const [showAddSong, setShowAddSong] = useState(null);

  // Get Song List
  useEffect(() => {
    fetch('/songs')
      .then((r) => r.json())
      .then((songs) => setSongs(songs));
  }, []);



  // Add Song Form
  function showAddSongForm(){
    setShowAddSong(true)
  };

  // Add Song to DOM
  function addNewSong(newSong){
    setSongs([newSong, ...songs]);
  };

  // Delete Song from DOM
  function handleDeleteSong(id){
    const updatedSongs = songs.filter((song) => song.id !== id);
    setSongs(updatedSongs)
  };

  // Search Songs


  if(showAddSong) return <AddSong setShowAddSong={setShowAddSong} addNewSong={addNewSong} />

  return (
    <div>
      <button onClick={showAddSongForm}> Add Track </button>
      {songs.map((song) => (
        <Song
          key={song.id}
          song={song}
          handleDeleteSong={handleDeleteSong}
        />
      ))}
    </div>
  );
}

export default Tracklist;