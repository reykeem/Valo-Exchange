import React from "react";

function Login(props) {
  const { closePopup } = props;

  return (
    <div className="login">
      <button onClick={() => closePopup()}>x</button>
      <span>
        Username: <input type="text" id="username" />
      </span>
      <span>
        Password: <input type="text" id="password" />
      </span>
      <button id="login-btn">Log In</button>
    </div>
  );
}

export default Login;
