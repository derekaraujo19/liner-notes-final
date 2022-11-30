import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Title from "./Title";
import NavBar from "./NavBar";
import Tracklist from "./Tracklist";
import '../App.css';

function App() {
  const [user, setUser] = useState(null)

  // console.log(user)

  // Stay Logged In:
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

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


  if(!user) return (
    <div className="App">
      <Title />
      <Auth user={user} setUser={setUser}/>
    </div>

  )

  return (
    <div className="App">
      <Title />
      <NavBar />
      <Routes>
        <Route exact path="/tracklist" element={<Tracklist />}/>
      </Routes>
      <button onClick={() => handleLogout()}> Log Out </button>
    </div>
  );
}

export default App;
