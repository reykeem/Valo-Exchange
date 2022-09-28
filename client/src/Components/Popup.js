import React, { useEffect, useState } from "react";
import "../styles/body.css";

function Popup(props) {
  const { closePopup, details } = props;

  //   const [allDetails, setAllDetails] = useState({});

  const [shopStats, setShopStats] = useState({});

  const [weaponStats, setWeaponStats] = useState({});

  const weapons = [
    "Odin",
    "Ares",
    "Vandal",
    "Classic",
    "Shorty",
    "Ghost",
    "Sheriff",
    "Stinger",
    "Spectre",
    "Judge",
    "Bulldog",
    "Guardian",
    "Phantom",
    "Marshal",
    "Operator",
  ];

  // function for getting the weapon from the details prop which just has the skin details
  const getWeapon = (skinName, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (skinName.includes(arr[i])) {
        return weapons[i];
      }
    }
  };

  // function for getting the entire weapon details object
  const getDescription = (arr, weapon) => {
    let result;
    arr.forEach((obj) => {
      if (obj["displayName"] === weapon) {
        result = obj;
      }
    });
    return result;
  };

  // get video from chromas arr
  //   const chromasArr = details["chromas"];
  //   let foundVideo =
  //     "https://media.valorant-api.com/streamedvideos/VALskinpreview_Reaver_02_Odin_04_chroma_03.mp4";
  //   chromasArr.forEach((obj) => {
  //     if (obj["streamedVideo"] !== null) {
  //       foundVideo = obj["streamedVideo"];
  //     }
  //   });

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons/")
      .then((res) => res.json())
      .then((data) => {
        const dataArr = data["data"];
        const weapon = getWeapon(details["displayName"], weapons);
        const fullDetails = getDescription(dataArr, weapon);
        console.log(fullDetails);
        // setAllDetails(fullDetails);
        setShopStats(fullDetails["shopData"]);
        setWeaponStats(fullDetails["weaponStats"]);
      });
  }, []);

  return (
    <div className="popup">
      <div className="top-popup">
        <button id="exit-btn" onClick={() => closePopup()}>
          x
        </button>
        <h1>{details["displayName"]}</h1>
        <div className="sub-title">
          <div className="skin-img">
            <img id="popup-img" src={details["displayIcon"]} />
          </div>
          <div className="popup-right">
            <span>Category: {shopStats["categoryText"]}</span>
            <span id="price">Price: {shopStats["cost"]}</span>
            <button id="add-to-cart-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="item-section">
        <span>
          <strong>Stats: </strong>
        </span>
        <span>Fire Rate: {weaponStats["fireRate"]}RPM</span>
        <span>
          First Bullet Accuracy: {weaponStats["firstBulletAccuracy"]}%
        </span>
        <span>Magazine Size: {weaponStats["magazineSize"]}</span>
        <span>Reload Time: {weaponStats["reloadTimeSeconds"]}s</span>
      </div>
    </div>
  );
}

export default Popup;
