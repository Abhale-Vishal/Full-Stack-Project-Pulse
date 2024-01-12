import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav({ onCreateTaskHandler, onApiData, onFtechDataHandler }) {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/");
      const data = await res.json();
      setdata(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  onApiData(data);
  onFtechDataHandler(isLoading);
  // console.log("fetch status : " + isLoading);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          Project Pulse
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Dashboard
              </a>
            </li>
            <Link to="/createtask" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/#"
                  onClick={() => onCreateTaskHandler(true)}
                >
                  Create Task
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <Link to="/tasklisthome" style={{ textDecoration: "none" }}>
                <a
                  className="nav-link"
                  href="/#"
                  onClick={() => onCreateTaskHandler(true)}
                >
                  Task List
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
