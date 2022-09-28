import React, { useEffect, useState } from "react";
import "../styles/body.css";
import Marketplace from "./Marketplace";
import Popup from "./Popup";

function Body() {
  // initialize popup state to false
  const [popup, setPopup] = useState(false);

  const [skinDetails, setSkinDetails] = useState({});

  // function to handle popup click set popup state to true and skindetails to be an obj from click e in ItemPreview
  const popupHandler = (details) => {
    setPopup(true);
    setSkinDetails(details);
  };

  // function to handle popup close
  const closePopup = () => {
    setPopup(false);
    setSkinDetails({});
  };

  // function to dim background on popup x
  const displayBody = () => {
    if (popup === true) {
      return {
        background: "rgb(0,0,0",
        opacity: "0.5",
        filter: "Alpha(Opacity=50)",
      };
    }
  };

  // useEffect hook to rerender on popup state change
  useEffect(() => {
    // console.log("CHECKING POPUP HANDLER: ", popup);
    // console.log(skinDetails);
  }, [popup, skinDetails]);

  return (
    <>
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
    </>
  );
}

export default Body;
