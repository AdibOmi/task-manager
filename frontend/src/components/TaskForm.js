import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task = {} }) => {
  const [form, setForm] = useState({
    title: task.title || '',
    description: task.description || '',
    dueDate: task.dueDate ? task.dueDate.substring(0, 10) : '',
    priority: task.priority || 'Medium',
    category: task.category || '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
