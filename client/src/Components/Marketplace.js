import React, { useEffect, useState } from "react";
import ItemPreview from "./ItemPreview";
import "../styles/marketplace.css";
import refresh from "../assets/refresh.png";

function Marketplace(props) {
  // initialize state to empty arr
  const [skinArr, setSkinArr] = useState([]);

  // function for randomizing indices
  const randIndices = (nums, result = []) => {
    if (nums === 0) return result;
    result.push(Math.floor(Math.random() * 500));
    return randIndices(nums - 1, result);
  };

  // api call to get and display gun skin
  const getSkins = () => {
    fetch("https://valorant-api.com/v1/weapons/skins")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const dataArr = data["data"];
        // randomize 20 indices
        const randomIndices = randIndices(50);
        const newSkinArr = [];
        randomIndices.forEach((i) => {
          if (typeof dataArr[i]["displayIcon"] !== null) {
            newSkinArr.push(dataArr[i]);
          }
        });
        // console.log(newSkinArr);
        setSkinArr(newSkinArr);

        // Loading effect*********
        // setTimeout(() => {
        //   setSkinArr(newSkinArr);
        // }, 1000);
      })
      .catch((err) => console.log(err));
  };

  // useEffect to rerender the marketplace component on state change
  useEffect(() => {}, [skinArr]);

  //this useEffect runs once, and runs on first render
  useEffect(() => {
    getSkins();
  }, []);

  return (
    <div className="marketplace">
      <div className="header">
        <h2>Marketplace</h2>
        <div id="refresh-div">
          <img id="refresh" onClick={() => getSkins()} src={refresh}></img>
        </div>
      </div>
      <div className="display">
        {skinArr.map((obj) => (
          <ItemPreview
            url={obj["displayIcon"]}
            name={obj["displayName"]}
            key={obj["uuid"]}
            popupHandler={props.popupHandler}
            details={obj}
          />
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
