
function Profile({user, setUser}) {

  // Log Out (needs to be moved to eventual profile tab)
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    })
  }

  // console.log(user)

  return (
    <div className="Profile">
      <h1> Welcome, {user.username} </h1>
      {/* <h4> You have logged {user.songs} </h4> */}
      <button onClick={() => handleLogout()}> Log Out </button>
    </div>
  );
}

export default Profile;