import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
//import datas from "../data";
//import countData from "./data";

const container = {
  display: "flex",
  alighItems: "center",
  justifyContent: "center",
  marginTop: "10px",
};

const filler = {
  width: "80%",
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

function TaskList({ selectedOption, data1 }) {
  // console.log(data1);
  //onCreateTaskHandler(true);
  const [reqData, setReqData] = useState([]);
  // const [isAvailable, setIsAvailable] = useState(false);

  const onSelectHandler = (option) => {
    const selectCoption = option.target.value;
    const newData1 = data1.filter((item) => item.status === selectCoption);
    setReqData(newData1);

    if (selectCoption === "All") {
      setReqData(data1);
    }

    if (selectedOption === undefined) {
      setReqData(data1);
    }
  };

  useEffect(() => {
    const newData2 = data1.filter((item) => item.status === selectedOption);
    setReqData(newData2);
  }, [selectedOption, data1]);

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:5000/api/${id}`);
    console.log(id);
    window.location.replace("/#");
  };

  return (
    <div>
      <div style={container}>
        <div className="card" style={filler}>
          <div className="card-header shadow text-success" style={header}>
            <div>
              <h4>Filter Task</h4>
            </div>
            <div>
              <select onClick={onSelectHandler}>
                {selectedOption && <option>{`${selectedOption}`}</option>}
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="in progress">In Progress</option>
                <option value="In Review">In Review</option>
                <option value="Not Started">Not Started</option>
                <option value="Error">Error</option>
              </select>
            </div>
          </div>

          <div>
            {reqData.map((item, index) => {
              return (
                <div className="card-body shadow" key={index} style={cardComp}>
                  <h5 className="card-title text-success">
                    Task Title - {item.tasktitle}
                  </h5>
                  <p className="card-text text-dark">
                    Description - {item.description}
                  </p>
                  <p className="card-text text-dark">Status - {item.status}</p>
                  <Link to={`/updatetask/${item._id}`}>
                    <button href="/#" className="btn btn-primary">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteHandler(item._id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* {isAvailable && (
        <span style={{ color: "black" }}>Sorry No Data to Show!</span>
      )} */}
    </div>
  );
}

export default TaskList;
