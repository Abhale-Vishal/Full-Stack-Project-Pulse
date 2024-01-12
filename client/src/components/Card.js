import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
//import datas from "../data";
//import { useState } from "react";

function Card({ onShowTaskListHandler, onSelectOption, data1 }) {
  let x = "";

  const handleSelect = (item) => {
    for (let key in item) {
      x = item[key].title;
    }
    onSelectOption(x);
  };

  const completed = data1.filter((item) => item.status === "Completed");
  const notStarted = data1.filter((item) => item.status === "Not Started");
  const inReview = data1.filter((item) => item.status === "In Review");
  const error = data1.filter((item) => item.status === "Error");
  const inProgress = data1.filter((item) => item.status === "in progress");

  const data = [
    {
      title: "Not Started",
      count: `${notStarted.length}`,
      color: "yellow",
    },
    {
      title: "in progress",
      count: `${inProgress.length}`,
      color: "skyblue",
    },
    {
      title: "In Review",
      count: `${inReview.length}`,
      color: "sky",
    },
    {
      title: "Completed",
      count: `${completed.length}`,
      color: "green",
    },
    {
      title: "Error",
      count: `${error.length}`,
      color: "red",
    },
  ];

  return (
    <Link
      to="/tasklisthome"
      style={{ textDecoration: "none" }}
      onClick={() => onShowTaskListHandler(false)}
    >
      <div className="card-data" style={comp}>
        {data.map((item, index) => {
          return (
            <div
              id="select"
              key={index}
              className="card shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rem", marginTop: "20px" }}
              onClick={() => handleSelect({ item })}
            >
              <div className="card-body ">
                <h6
                  className="mb-2 text-blue"
                  style={{
                    color: `${item.color}`,
                    marginTop: "-15px",
                    fontSize: "20px",
                  }}
                >
                  {item.title}
                </h6>

                <h5>
                  <span style={{ color: "black" }}>{item.count}</span>
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </Link>
  );
}

export default Card;

const comp = {
  display: "flex",
  justifyContent: "center",
};
