import React from "react";
//import datas from "../data";
import { useState } from "react";
import axios from "axios";
// import DatePicker from 'react-datepicker'

function CreateTask() {
  //const [adddata, setAddData] = useState(datas);
  const [tasktitle, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  // const [date, setdate] = useState();

  const submitHandler = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/", {
        tasktitle,
        description,
        status,
      });
      res && window.location.replace("/#"); //post click on add btn you will directed to home screen.
    } catch (err) {
      console.log(err);
    }
    const datass = { tasktitle, description, status };
    console.log(datass);
  };
  return (
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
            Create Task
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
          {/* <div style={title}>
            <label htmlFor="date" className="text-dark">
              Due date*
            </label>
            <input
              type="date"
              id="date"
              placeholder="dd-mm-yyyy"
              style={{ border: "1px solid lightgrey", borderRadius: "6px" }}
              select={date}
              onChange={(e) => setdate(e.target.value)}
            />
          </div> */}
        </div>
        <div style={btn}>
          <button type="submit" class="btn btn-primary" onClick={submitHandler}>
            +Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

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
export default CreateTask;
