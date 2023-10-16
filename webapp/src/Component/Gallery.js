import React, { useState } from "react";
import Manu from "./Manu";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="mt-5 container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elment) => {
                return (
                  <div className="card col-12 col-md-12 col-lg-6 col-xl-4 my-3">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-5 ">
                        <img src={elment.image} alt="Food_item" />
                      </div>
                      <div className="col-12 col-md-12 col-lg-7">
                        <div className="main-titel pt-4 pb-3">
                          <h1 className="sub_titel">{elment.name}</h1>
                          <p>{elment.description}</p>
                          <div className="d-flex justify-content-between">
                            <h4>{elment.price}</h4>
                            <a href="#">
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </a>
                          </div>
                          <p>Lorem, ipsum dolor sit amet elit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
