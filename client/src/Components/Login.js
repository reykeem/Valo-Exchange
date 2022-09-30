import React, { useState } from "react";
import raze from "../assets/raze-gif.gif";

function Login(props) {
  const { closePopup, loggedInToggle } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("username: ", username);
    console.log("password: ", password);
    fetch("http://localhost:3000/login", {
      method: "POST",
      //   mode: "no-cors",
      credentials: "include",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-Trigger": "CORS",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => {
        if (res.status === 200) {
          // call loggedInToggle to trigger state change for welcome component
          loggedInToggle();
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      })
      .then((data) => console.log("data:", data))
      .catch((err) => console.log(`ERROR: ${err}`));
  };

  return (
    <div className="login">
      <button id="exit-btn" onClick={() => closePopup()}>
        x
      </button>
      <span id="welcome">Welcome back</span>
      <div className="user-inputs">
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
        <img id="raze" src={raze} />
      </div>
    </div>
  );
}

export default Login;
