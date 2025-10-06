import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  
  const handleSubmit = () => {
   setTasks(prevTasks => [...prevTasks, { id: Date.now(), text }]);
   setText("");
   console.log(tasks);
   
  };

  
  const handleDelete = (id) => {
    // TODO: filter tasks by id to remove the clicked one
    setTasks(tasks.filter(task => task.id !== id));


  };

  
  const handleClearAll = () => {
    // TODO: set tasks to empty array
    setTasks([]);
  };

  return (
    <section className="card">
      {/*Controlled Input */}
      <div className="inputRow">
        <input
          type="text"
          placeholder="Type a task..."
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
        
      </div>
      <p>{text}</p>

      {/*Render Task List and Enable Delete */}
      {/*Pass tasks and onDelete */}
      <TaskList  tasks={tasks} onDelete={handleDelete}  />

      {/*Clear All */}
      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}
