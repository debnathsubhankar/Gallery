import React, { useState } from "react";
import Manu from "./Manu";
import "bootstrap/dist/css/bootstrap.min.css";
import Listgallery from "./Listgallery";
import ConMenu from "./ConMenu";

const verifyData = [
  ...new Set(
    Manu.map((curEle) => {
      return curEle.cetagory;
    })
  ),
  "all",
];

console.log(verifyData);

const Gallery = () => {
  const [items, setItems] = useState(Manu);
  const filterItem = (itemCeta) => {
    if (itemCeta === "all") {
      setItems(Manu);
      return;
    }
    const newFilterItem = Manu.filter((curEle) => {
      return curEle.cetagory === itemCeta;
    });
    setItems(newFilterItem);
  };
  return (
    <div className="container">
      <h1>My Gallery</h1>
      <hr />
      {/* menu ber */}
      <ConMenu filterItem={filterItem} verifyData={verifyData} />
      {/* item section */}
      <Listgallery items={items} />
    </div>
  );
};

export default Gallery;
