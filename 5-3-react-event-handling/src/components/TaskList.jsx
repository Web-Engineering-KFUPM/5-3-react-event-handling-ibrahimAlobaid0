import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {/* Task 2 – Display Placeholder if No Tasks Yet */}
      {tasks.length === 0 && <li>No Tasks Yet</li>}

      {/* Task 2 & 3 – Map tasks to TaskItem */}
      {tasks.map((task) => (
        <TaskItem key={task.id} text={task.text} id={task.id} onDelete={onDelete} />
      ))}
      
    </ul>
  );
}
