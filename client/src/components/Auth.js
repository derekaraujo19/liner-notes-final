import React, {useState} from "react";

function Auth({user, setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [logInError, setLogInError] = useState("");
  const [signUpErrors, setSignUpErrors] = useState([]);

  // Sign Up
  function handleSignupSubmit(e){
    e.preventDefault();
    fetch("/api/signup", {
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
        r.json().then((err) => setSignUpErrors(err.errors))
      }
    });
  }

  // Log In
  function handleLoginSubmit(e) {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    .then(r => {
      if (r.ok){
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setLogInError(err.error));
      }
    });
  }

  return (
    <div className="Auth">
      {/* Log In Form */}
      <h1> Log In </h1>
      <form onSubmit={handleLoginSubmit}>
        <input type="text" name="username" placeholder="Username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" name="password" placeholder="Password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="button"> SUBMIT </button>
      </form>

      {/* Log In Error */}
      <div>
        {logInError ? (
          <ul className="Errors">{logInError}</ul>
        ) : ""}
      </div>

      {/* Sign Up Form */}
      <h1> Or Create an Account </h1>
      <form onSubmit={handleSignupSubmit}>
        <input type="text" name="username" placeholder="Username" autoComplete="off" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        <input type="text" name="password" placeholder="Password" autoComplete="off" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <input type="text" name="password_confirmation" placeholder="Confirm Password" autoComplete="off" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
        <button className="button"> CREATE ACCOUNT </button>
      </form>

      {/* Sign Up Errors */}
      <div>
        {signUpErrors ? signUpErrors.map((error) => (
          <ul key={error} className="Errors">{error}</ul>
        )) : ""}
      </div>
    </div>
  )
}

export default Auth;