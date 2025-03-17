import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  const [newtask, setNewtask] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [darkMode, setDarkMode] = useState(false); // Add state for theme toggle

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

  // Handle Enter key press to add task
  function handleKeyPress(e) {
    if (e.key === 'Enter' && newtask.trim() !== "" && taskTime.trim() !== "") {
      addTask();
    }
  }

  // Toggle dark gaming theme
  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`todolist ${darkMode ? "dark-theme" : ""}`}>
      <div className="theme-toggle-container">
        <button 
          className={`theme-toggle ${darkMode ? "dark-active" : ""}`} 
          onClick={toggleTheme}
        >
          {darkMode ? "🌞 Light Mode" : "🎮 Gaming Mode"}
        </button>
      </div>
      <h1>Task Manager</h1>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="What needs to be done?"
          value={newtask}
          onChange={inputChange}
          onKeyPress={handleKeyPress}
        />
        <input
          className="time-picker"
          type="time"
          value={taskTime}
          onChange={timeChange}
          onKeyPress={handleKeyPress}
        />
        <button className="add" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="list-container">
        {task.length === 0 ? (
          <p className="empty-message">Your task list is empty. Add a task to get started!</p>
        ) : (
          <ol>
            {task.map((taskItem, index) => (
              <li key={index} className="list">
                <span className="taskitem">
                  {taskItem.name} - {taskItem.time}
                </span>
                <div className="task-buttons">
                  <button className="move" onClick={() => moveUp(index)}>
                    ↑
                  </button>
                  <button className="move-down" onClick={() => moveDown(index)}>
                    ↓
                  </button>
                  <button className="submit" onClick={() => deleteTask(index)}>
                    Delete
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
