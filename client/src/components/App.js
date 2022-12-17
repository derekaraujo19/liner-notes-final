import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Auth";
import Title from "./Title";
import NavBar from "./NavBar";
import Tracklist from "./Tracklist";
import Notes from "./Notes";
import AlbumList from "./AlbumList";
import Profile from "./Profile";
import '../App.css';

function App() {
  const [user, setUser] = useState(null)



  // Stay Logged In:
  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  // Log In Page - Auth
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
        <Route exact path="/notes" element={<Notes />}/>
        <Route exact path="/albums" element={<AlbumList />}/>
        <Route exact path="/profile" element={<Profile user={user} setUser={setUser}/>}/>
        <Route path="" element={<Navigate to="/profile" />} />
      </Routes>
    </div>
  );
}

export default App;
