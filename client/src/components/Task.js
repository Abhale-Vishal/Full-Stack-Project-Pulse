import React from "react";
import "./Task.css";
//import datas from "../data";

const mainContainer = {
  display: "flex",
  justifyContent: "space-around",
  flex: "2",
  flexWrap: "wrap",
  // height: "100vh",
};

const containers = {
  alighItems: "center",
  margin: "20px",
  //border: "2px solid black",
  width: "40%",
};

const filler = {
  width: "100%",
};

const desc = {
  margin: "10px",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
};

const cardComp = {
  border: "2px solid lightgrey",
  margin: "10px",
  borderRadius: "9px",
};

const loading = {
  color: "black",
  textAlign: "center",
  fontSize: "30px",
  fontWight: "800px",
};

function Task({ data, status }) {
  return (
    <div>
      {status ? (
        <p style={loading}>Please wait Loading...</p>
      ) : (
        <div style={mainContainer} className=" shadow">
          {data.map((item, ind) => {
            return (
              <div style={containers} key={ind}>
                <div className="card" style={filler}>
                  <div
                    className="card-header shadow text-success"
                    style={header}
                  >
                    {item.status.toUpperCase()}
                  </div>
                  <div style={desc}>
                    <div className="card-body shadow" style={cardComp}>
                      <h5 className="card-title text-success">
                        {item.tasktitle}
                      </h5>
                      <p className="card-text text-dark">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Task;
