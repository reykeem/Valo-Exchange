import React, { useState } from "react";

function Signup(props) {
  const { closePopup } = props;

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSignup = () => {
    console.log("newUsername: ", newUsername);
    console.log("newPassword: ", newPassword);
    fetch("http://localhost:3000/signup", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: newUsername, password: newPassword }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(`ERROR: ${err}`));
  };

  return (
    <div className="signup">
      <button onClick={() => closePopup()}>x</button>
      <span>Create your account</span>
      <span>
        Username:{" "}
        <input
          onChange={(e) => setNewUsername(e.target.value)}
          type="text"
          id="username"
        />
      </span>
      <span>
        Password:{" "}
        <input
          onChange={(e) => setNewPassword(e.target.value)}
          type="text"
          id="password"
        />
      </span>
      <button onClick={() => handleSignup()} id="signup-btn">
        Sign Up
      </button>
    </div>
  );
}

export default Signup;
