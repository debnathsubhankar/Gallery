import React from "react";

const ConMenu = ({ filterItem, verifyData }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="manu-tab d-flex justify-content-around">
          {verifyData.map((curEle) => {
            return (
              <button
                className="btn btn-warning"
                onClick={() => filterItem(curEle)}
              >
                {curEle}
              </button>
            );
          })}
          {/* <i>
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
          </i> */}
        </div>
      </div>
    </>
  );
};

export default ConMenu;
