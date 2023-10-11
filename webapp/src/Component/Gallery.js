import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  return (
    <div className="container">
      <h1>My Gallery</h1>
      <hr />
      <div className="container-fluid">
        <div className="manu-tab d-flex justify-content-around">
          <i>
            <button className="btn btn-warning">All Item</button>
          </i>
          <i>
            <button className="btn btn-warning">Break Fast</button>
          </i>
          <i>
            <button className="btn btn-warning">Dinner</button>
          </i>
          <i>
            <button className="btn btn-warning">Lunch</button>
          </i>
        </div>
      </div>
      {/* item section */}
      <div className="mt-5 container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              <div className="card col-12 col-md-12 col-lg-6 col-xl-4">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-4">
                    <img src="" alt="Food_item" />
                  </div>
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="main-titel pt-4 pb-3">
                      <h1>Meggi</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="d-flex justify-content-between">
                        <h2>Price : 12</h2>
                        <a href="#">
                          <button className="btn btn-primary">Order Now</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
