import React, { useEffect, useState } from "react";
import ItemPreview from "./ItemPreview";
import "../styles/marketplace.css";

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
  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons/skins")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const dataArr = data["data"];
        // randomize 20 indices
        const randomIndices = randIndices(20);
        const newSkinArr = [];
        randomIndices.forEach((i) => {
          if (typeof dataArr[i]["displayIcon"] !== null) {
            newSkinArr.push(dataArr[i]);
          }
        });
        // console.log(newSkinArr);
        setSkinArr(newSkinArr);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="marketplace">
      <div id="marketplaceh2div">
        <h2>Marketplace</h2>
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
