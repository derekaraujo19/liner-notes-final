
function Album({album, handleDeleteAlbum}) {

  // Delete Album
  function handleDeleteSubmit(){
    fetch(`/albums/${album.id}`, {
      method: "DELETE"
    });
    handleDeleteAlbum(album.id)
  };

  return (
    <div className="AlbumList">
      <h1>{album.id} {album.title}</h1>
      <img src={album.artwork_url} alt="Album Artwork" width="400" height="400"/>
      {album.songs.map(song => <ul key={song.id}>{song.name}</ul>)}
      <button onClick={handleDeleteSubmit}>
        <div role="img" aria-label="delete"> 🗑 </div>
      </button>
    </div>

  );
}

export default Album;