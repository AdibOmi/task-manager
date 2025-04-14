import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onComplete }) => (
  <div>
    <h4>{task.title}</h4>
    <p>{task.description}</p>
    <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
    <p>Priority: {task.priority}</p>
    <p>Category: {task.category}</p>
    <p>Status: {task.completed ? '✅ Completed' : '❌ Not Completed'}</p>
    <button onClick={() => onEdit(task)}>Edit</button>
    <button onClick={() => onDelete(task._id)}>Delete</button>
    {!task.completed && <button onClick={() => onComplete(task._id)}>Mark as Complete</button>}
  </div>
);

export default TaskItem;
