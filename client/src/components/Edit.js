import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function Edit() {
  // const [apiData, setApiData] = useState();
  const [tasktitle, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log(status);

  const location = useLocation();
  const dataId = location.pathname.split("/")[2];

  useEffect(() => {
    setIsLoading((prev) => !prev);
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/" + dataId);
      const resData = await res.json();
      console.log(resData);
      setTitle(resData.tasktitle);
      setDescription(resData.description);
      setStatus(resData.status);
      setIsLoading((prev) => !prev);
    };
    fetchData();
  }, [dataId]);

  // console.log(apiData);

  const submitHandler = async () => {
    try {
      await axios.put("http://localhost:5000/api/" + dataId, {
        tasktitle: tasktitle,
        description: description,
        status: status,
      });

      window.location.replace("/#");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <div class="card shadow" style={cardContainer}>
          <div style={{ margin: "10px" }}>
            <h5 class="card-title text-primary" style={{ fontSize: "40px" }}>
              Update Task
            </h5>
            <div style={title}>
              <label htmlFor="title" className="text-dark">
                Task Title*
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter Task Title"
                style={{ border: "1px solid lightgrey", borderRadius: "6px" }}
                value={tasktitle}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div style={title}>
              <label htmlFor="desc" className="text-dark">
                Description*
              </label>
              <textarea
                type="text"
                id="desc"
                placeholder="Enter Task Description..."
                style={{ border: "1px solid lightgrey", borderRadius: "6px" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div style={title}>
              <label htmlFor="priority" className="text-dark">
                status*
              </label>
              <select
                id="priority"
                style={{ border: "1px solid lightgrey", borderRadius: "6px" }}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Select Status*</option>
                <option value="Not Started">Not Started</option>
                <option value="In Review">In Review</option>
                <option value="in progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Error">Error</option>
              </select>
            </div>
          </div>
          <div style={btn}>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={submitHandler}
            >
              +Update Task
            </button>
          </div>
        </div>
      </div>
      {isLoading && <p style={loading}>Please Wait Data is Loading!</p>}
    </div>
  );
}

const loading = {
  color: "black",
  textAlign: "center",
  fontSize: "30px",
  fontWight: "800px",
};

const cardContainer = {
  width: "60%",
};

const title = {
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
};

const btn = {
  margin: "10px",
  marginBottom: "25px",
  cursor: "pointer",
};

export default Edit;
