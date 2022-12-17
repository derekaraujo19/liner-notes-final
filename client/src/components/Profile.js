
function Profile({user, setUser}) {


  // Log Out
  function handleLogout() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    })
  }




  return (
    <div className="Profile">
      <h1> Welcome, {user.username}! </h1>
      <h4> You have logged {user.songs ? user.songs.length : ""} songs </h4>
      <h4> and </h4>
      <h4> {user.albums ? user.albums.length : "0"} albums </h4>
      <button onClick={() => handleLogout()}> Log Out </button>
    </div>
  );
}

export default Profile;