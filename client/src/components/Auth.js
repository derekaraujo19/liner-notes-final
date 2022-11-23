import React, {useState} from "react";

function Auth({user, setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // console.log(passwordConfirm)

  // Sign Up
  function handleSignupSubmit(e){
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username":newUsername,
        "password":newPassword,
        "password_confirmation":passwordConfirm,
      }),
    }).then((r)=> {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => console.log(err.errors))
      }
    });
  }

  return (
    <div>
      {/* Log In Form */}
      <h1> Log In </h1>
      <form>
        <input type="text" name="username" placeholder="Username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" name="password" placeholder="Password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button> Submit </button>
      </form>
      {/* Sign Up Form */}
      <h1> Or Create an Account </h1>
      <form onSubmit={handleSignupSubmit}>
        <input type="text" name="username" placeholder="Username" autoComplete="off" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        <input type="text" name="password" placeholder="Password" autoComplete="off" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <input type="text" name="password_confirmation" placeholder="Confirm Password" autoComplete="off" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
        <button> Create Account </button>
      </form>
    </div>
  )
}

export default Auth;