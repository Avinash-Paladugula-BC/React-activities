import { useState } from "react";
import Task from "./task";

function TaskManager() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit(e) {
    // To avoid reload of the page
    e.preventDefault();

    setTaskList([...taskList, task]);
    setTask("");
  }

  function deleteTask(index) {
    const newList = taskList.filter((element, idx) => idx !== index);
    setTaskList(newList);
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task.."
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {taskList.map((task, index) => (
          <Task
            key={index}
            name={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
