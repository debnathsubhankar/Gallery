import React, { useState } from "react";
import Manu from "./Manu";
import "bootstrap/dist/css/bootstrap.min.css";
import Listgallery from "./Listgallery";

const Gallery = () => {
  const [items, setItems] = useState(Manu);
  const filterItem = (itemCeta) => {
    const newFilterItem = Manu.filter((curEle) => {
      return curEle.cetagory === itemCeta;
    });
    setItems(newFilterItem);
  };
  return (
    <div className="container">
      <h1>My Gallery</h1>
      <hr />
      <div className="container-fluid">
        <div className="manu-tab d-flex justify-content-around">
          <i>
            <button className="btn btn-warning" onClick={() => setItems(Manu)}>
              All Item
            </button>
          </i>
          <i>
            <button
              className="btn btn-warning"
              onClick={() => filterItem("breakfast")}
            >
              Break Fast
            </button>
          </i>
          <i>
            <button
              className="btn btn-warning"
              onClick={() => filterItem("dinner")}
            >
              Dinner
            </button>
          </i>
          <i>
            <button
              className="btn btn-warning"
              onClick={() => filterItem("lunch")}
            >
              Lunch
            </button>
          </i>
        </div>
      </div>
      {/* item section */}
      <Listgallery items={items} />
    </div>
  );
};

export default Gallery;
