import React, { useState } from "react";

function Login(props) {
  const { closePopup } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        mode: "no-cors",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(`ERROR: ${err}`));
  };

  return (
    <div className="login">
      <button onClick={() => closePopup()}>x</button>
      <div className="user-inputs">
        <span>Welcome back</span>
        <span>
          Username:{" "}
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
          />
        </span>
        <span>
          Password:{" "}
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            id="password"
          />
        </span>
        <button onClick={() => handleLogin()} id="login-btn">
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
