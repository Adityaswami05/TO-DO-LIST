import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  const [newtask, setNewtask] = useState("");
  const [taskTime, setTaskTime] = useState("");

  function inputChange(e) {
    setNewtask(e.target.value);
  }

  function timeChange(e) {
    setTaskTime(e.target.value);
  }

  function addTask() {
    if (newtask.trim() === "" || taskTime.trim() === "") {
      alert("Please enter task and time");
      return;
    }

    setTask([...task, { name: newtask.toUpperCase(), time: taskTime }]); // Store task with time
    setNewtask("");
    setTaskTime("");
  }

  function deleteTask(index) {
    setTask(task.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if (index === 0) return;
    const updatedTasks = [...task];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];
    setTask(updatedTasks);
  }

  function moveDown(index) {
    if (index === task.length - 1) return;
    const updatedTasks = [...task];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];
    setTask(updatedTasks);
  }

  return (
    <div className="todolist">
      <h1>To Do List</h1>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Enter task"
          value={newtask}
          onChange={inputChange}
        />
        <input
          className="time-picker"
          type="time"
          value={taskTime}
          onChange={timeChange}
        />
        <button className="add" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="list-container">
        {task.length === 0 ? (
          <p className="empty-message">No tasks added</p>
        ) : (
          <ol>
            {task.map((taskItem, index) => (
              <li key={index} className="list">
                <span className="taskitem">
                  {taskItem.name} - {taskItem.time}
                </span>
                <div>
                  <button className="submit" onClick={() => deleteTask(index)}>
                    Delete
                  </button>
                  <button className="move" onClick={() => moveUp(index)}>
                    ↑
                  </button>
                  <button className="move-down" onClick={() => moveDown(index)}>
                    ↓
                  </button>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
