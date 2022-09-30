import React, { useState } from "react";

function Signup(props) {
  const { closePopup } = props;

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSignup = () => {
    console.log("newUsername: ", JSON.stringify(newUsername));
    console.log("newPassword: ", JSON.stringify(newPassword));
    fetch("http://localhost:3000/signup", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ username: newUsername, password: newPassword }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(`ERROR: ${err}`));
  };

  return (
    <div className="signup">
      <span id="welcome">Create your account</span>
      <button id="exit-btn" onClick={() => closePopup()}>
        x
      </button>
      <div id="user-inputs">
        <span>
          Username:{" "}
          <input
            onChange={(e) => setNewUsername(e.target.value)}
            type="text"
            id="username"
            value={newUsername}
          />
        </span>
        <span>
          Password:{" "}
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            type="text"
            id="password"
            value={newPassword}
          />
        </span>
        <button onClick={() => handleSignup()} id="login-btn">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
