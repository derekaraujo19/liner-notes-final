import React, { useEffect, useState } from "react";
import Song from "./Song";
import AddSong from "./AddSong";

function Tracklist() {
  const [songs, setSongs] = useState([]);
  const [showAddSong, setShowAddSong] = useState(null);
  const [search, setSearch] = useState("");

  // Get Song List
  useEffect(() => {
    fetch('/api/songs')
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

  // Update Song in DOM
  function handleUpdateSong(updatedSong) {
    const updatedSongs = songs.map((song) => {
      if (song.id === updatedSong.id) {
        return updatedSong
      } else {
        return song;
      }
    });
    setSongs(updatedSongs);
  };

  // Search Songs
  const displayedSongs = songs.filter((song) =>
  song.name.toLowerCase().includes(search.toLowerCase())
  );


  if(showAddSong) return <AddSong setShowAddSong={setShowAddSong} addNewSong={addNewSong} />

  if(songs.length === 0) return (
    <div>
      <h2 className="No-Content"> No Songs Yet! Click Add Track to Get Started </h2>
      <button onClick={showAddSongForm} className="button"> ADD TRACK </button>
    </div>
  );

  return (
    <div className="Lists">
      <div className="SearchBox">
        <input
          type="text"
          name="search"
          placeholder="search by song"
          autoComplete="off"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <button className="button" onClick={showAddSongForm}> ADD TRACK </button>
      {displayedSongs.map((song) => (
        <Song
          key={song.id}
          song={song}
          handleDeleteSong={handleDeleteSong}
          handleUpdateSong={handleUpdateSong}
        />
      ))}
    </div>
  );
}

export default Tracklist;