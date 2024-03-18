import { memo, useState } from "react";
import React from "react";
import "./todolist.css";
import List from "../list/list";

import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Todolist(props) {
  let count = useSelector((state) => state.count)
  let [taskList, setTaskList] = useState([]);
  let [task, setTask] = useState("");
  let [taskNotValid, setTaskNotValid] = useState(false);
  const updateTask = (event) => {
    setTask(event.target.value);
  };
  const addTask = (event) => {
    // prevents page from reloading...
    // default nature of javascript
    event.preventDefault();
    if (task) {
      setTaskList([...taskList, task]);
      setTask("");
      setTaskNotValid(false);
      console.log("I am from todo");
      props.handleClick([...taskList, task]);
    } else {
      setTaskNotValid(true);
    }
  };
  console.log("I am todo");
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <Outlet></Outlet>
      <div className="todolist">
        {count}
        <form action="">
          <div className="input">
            <input type="text" onChange={updateTask} value={task} />
            {taskNotValid && (
              <div className="validation">Please enter task name...</div>
            )}
          </div>
          <input type="submit" onClick={addTask} value="Add task" />
        </form>
      </div>
    </React.Fragment>
  );
}

export default memo(Todolist);
