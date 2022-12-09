
function Album({album}) {
  return (
    <div className="AlbumList">
      <h1>{album.id} {album.title}</h1>
      <img src={album.artwork_url} alt="Album Artwork" width="400" height="400"/>
    </div>

  );
}

export default Album;