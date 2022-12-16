
function Album({album, handleDeleteAlbum}) {

  // Delete Album
  function handleDeleteSubmit(){
    fetch(`/albums/${album.id}`, {
      method: "DELETE"
    });
    handleDeleteAlbum(album.id)
  };

  // console.log(album)

  return (
    <div className="AlbumList">
      <h1><em>{album.title}</em> {album.release_date ? `(${album.release_date})` : ""}</h1>
      <h2>{album.artist}</h2>
      <h4>{album.genre}</h4>
      <img src={album.artwork_url} alt="Album Artwork" width="400" height="400"/>
      {album.songs.map(song => <ul key={song.id}>{song.name}</ul>)}
      <button onClick={handleDeleteSubmit}>
        <div role="img" aria-label="delete"> 🗑 </div>
      </button>
    </div>

  );
}

export default Album;