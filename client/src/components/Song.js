
function Song({song, handleDeleteSong}) {

  // Delete Song
  function handleDeleteSubmit(){
    fetch(`/songs/${song.id}`, {
      method: "DELETE"
    });
    handleDeleteSong(song.id)
  };

  return (
    <div>
      <h1>{song.id} {song.name}</h1>
      {song.album ? <ul>From the Album: {song.album.title}</ul> : ""}
      <button onClick={handleDeleteSubmit}>
        <div role="img" aria-label="delete"> 🗑 </div>
      </button>
    </div>
  );
}

export default Song;