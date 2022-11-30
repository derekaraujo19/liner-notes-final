import React, { useEffect, useState } from "react";
import Song from "./Song";

function Tracklist() {
  const [songs, setSongs] = useState([]);

  // Get Song List
  useEffect(() => {
    fetch('/songs')
      .then((r) => r.json())
      .then((songs) => setSongs(songs));
  }, []);


  return (
    <div>
      {songs.map((song) => (
        <Song song={song}/>
      ))}
    </div>
  );
}

export default Tracklist;