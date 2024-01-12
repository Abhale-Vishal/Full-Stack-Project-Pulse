import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import Dashboard from "./components/Dashboard";
import Edit from "./components/Edit";

function App() {
  const [showTaskList, setTaskList] = useState(true);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [value1, setValue1] = useState("Error");
  const [apiData, setApiData] = useState([]);
  const [fetchDataStatus, setFetchDataStatu] = useState();

  // console.log(value1);

  const apiDatahandler = (data) => {
    setApiData(data);
  };

  const showTaskListHandler = (val) => {
    //console.log(val);
    setTaskList(val);
  };

  const showCreateTaskHandler = (val1) => {
    setShowCreateTask(val1);
  };

  const getSelectedOption = (val) => {
    setValue1(val);
  };

  const fetchDataStatusHandler = (status) => {
    setFetchDataStatu(status);
  };
  //console.log("fetch status : " + fetchDataStatus);
  return (
    <div className="main">
      <BrowserRouter>
        <Nav
          onCreateTaskHandler={showCreateTaskHandler}
          onApiData={apiDatahandler}
          onFtechDataHandler={fetchDataStatusHandler}
        />

        {showTaskList ? (
          <div>
            {showCreateTask ? (
              <Routes>
                <Route
                  path="/tasklisthome"
                  element={
                    <TaskList
                      selectedOption={"in progress"}
                      data1={apiData}
                      // onCreateTaskHandler={showCreateTaskHandler}
                    />
                  }
                ></Route>
                <Route path="/createtask" element={<CreateTask />}></Route>
                <Route path="/updatetask/:id" element={<Edit />}></Route>
              </Routes>
            ) : (
              <div>
                <Dashboard />

                <Card
                  onShowTaskListHandler={showTaskListHandler}
                  onSelectOption={getSelectedOption}
                  data1={apiData}
                />
                <Task data={apiData} status={fetchDataStatus} />
                {/* <Route path="/updatetask" element={<Edit />}></Route> */}
              </div>
            )}
          </div>
        ) : (
          <div>
            <Routes>
              <Route
                path="/tasklisthome"
                element={
                  <TaskList
                    selectedOption={value1}
                    data1={apiData}
                    // onCreateTaskHandler={showCreateTaskHandler}
                  />
                }
              ></Route>
              <Route path="/createtask" element={<CreateTask />}></Route>
              <Route path="/updatetask/:id" element={<Edit />}></Route>
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
