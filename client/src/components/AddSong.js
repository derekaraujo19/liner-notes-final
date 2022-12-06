import React, {useState} from "react";

function AddSong({setShowAddSong}) {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [songSpot, setSongSpot] = useState("");
  const [albumTitle, setAlbumTitle] = useState("");
  const [artwork, setArtwork] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [is_writer, setIs_Writer] = useState(false);
  const [is_performer, setIs_Performer] = useState(false);
  const [is_producer, setIs_Producer] = useState(false);
  const [is_engineer, setIs_Engineer] = useState(false);

  console.log(is_engineer)

  // Return user to tracklist
  function returnToTrackList(){
    setShowAddSong(false);
  };

  return (
    <div className="Forms">
      <form>
        {/* Song Form */}
        <label>
        <h4> Song Data: </h4>
          <input type="text" name="name" placeholder="Song Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" name="artist" placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)}/>
          <input type="text" name="spotify_url" placeholder="Spotify Link" value={songSpot} onChange={(e) => setSongSpot(e.target.value)}/>
        </label>
        {/* Album Form */}
        <label>
          <h4> Album Data: </h4>
          <input type="text" name="album_title" placeholder="Album Title" value={albumTitle} onChange={(e) => setAlbumTitle(e.target.value)}/>
          <input type="text" name="artwork_url" placeholder="Artwork URL" value={artwork} onChange={(e) => setArtwork(e.target.value)}/>
          <input type="text" name="release_date" placeholder="Album Release Date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)}/>
        </label>

        {/* Involvement Form */}
        <label>
          <h4> Involvement: </h4>
          <input type="checkbox" name="writer" value={is_writer} onChange={(e) => setIs_Writer(!is_writer)} />
          <label> Writer </label>

          <input type="checkbox" name="performer" value={is_performer} onChange={(e) => setIs_Performer(!is_performer)} />
          <label> Performer </label>

          <input type="checkbox" name="producer" value={is_producer} onChange={(e) => setIs_Producer(!is_producer)}/>
          <label> Producer </label>

          <input type="checkbox" name="engineer" value={is_engineer} onChange={(e) => setIs_Engineer(!is_engineer)} />
          <label> Engineer </label>
        </label>


      </form>
      <button onClick={returnToTrackList}> Return to Tracklist </button>
    </div>
  );
}

export default AddSong;