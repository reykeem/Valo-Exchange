import React, { useEffect, useState } from "react";
import "../styles/body.css";
import Marketplace from "./Marketplace";
import Popup from "./Popup";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";

function Body() {
  // initialize popup state to false
  const [popup, setPopup] = useState(false);

  const [skinDetails, setSkinDetails] = useState({});

  // initialize loginToggle state to false
  const [loginToggle, setLoginToggle] = useState(false);
  const [signupToggle, setSignupToggle] = useState(false);

  // initialize signup user/pw

  // initialize logged in state to false
  const [loggedIn, setLoggedIn] = useState(false);

  // function to handle popup click set popup state to true and skindetails to be an obj from click e in ItemPreview
  const popupHandler = (details) => {
    setPopup(true);
    setSkinDetails(details);
  };

  // function to handle popup close
  const closePopup = () => {
    setPopup(false);
    setSkinDetails({});
    setLoginToggle(false);
    setSignupToggle(false);
  };

  // function to dim background on popup x
  const displayBody = () => {
    if (popup === true || loginToggle === true) {
      return {
        background: "rgb(0,0,0)",
        opacity: "0.5",
        filter: "Alpha(Opacity=50)",
      };
    }
  };

  // useEffect hook to rerender on popup state change
  useEffect(() => {
    // if cookie exists flip the switch to make the Welcome tab persist
    if (document.cookie) setLoggedIn(true);
  }, [popup, skinDetails, loginToggle, signupToggle, loggedIn]);

  const handleLoginClick = () => {
    setLoginToggle(true);
  };

  const handleSignupClick = () => {
    setSignupToggle(true);
  };

  const handleLoggedIn = () => {
    setLoggedIn(true);
    // console.log(user);
  };

  return (
    <>
      <Navbar
        handleLoginClick={handleLoginClick}
        handleSignupClick={handleSignupClick}
        // handleLoggedIn={handleLoggedIn}
        isLoggedIn={loggedIn}
      />
      <div style={displayBody()} className="body">
        <div className="banner">
          <img
            src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc04e4637524166dc/621853fd6be1e66143a66db2/022822_TakeoverCap_Banner.jpg?auto=webp&disable=upscale&height=500"
            alt="banner"
          />
        </div>
        <Marketplace popupHandler={popupHandler} />
      </div>
      {popup ? <Popup closePopup={closePopup} details={skinDetails} /> : ""}
      {loginToggle ? (
        <Login loggedInToggle={handleLoggedIn} closePopup={closePopup} isLoggedIn={loggedIn} />
      ) : (
        ""
      )}
      {signupToggle ? <Signup closePopup={closePopup} /> : ""}
    </>
  );
}

export default Body;
