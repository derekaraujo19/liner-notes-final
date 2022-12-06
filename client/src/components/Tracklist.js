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

  console.log(songs.length)
  // Add Song Form
  function showAddSongForm(){
    setShowAddSong(true)
  };

  // Search Songs

  if(showAddSong) return <AddSong setShowAddSong={setShowAddSong}/>

  return (
    <div>
      <button onClick={showAddSongForm}> Add Track </button>
      {songs.map((song) => (
        <Song
          key={song.id}
          song={song}
        />
      ))}
    </div>
  );
}

export default Tracklist;