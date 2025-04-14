import React, { useEffect, useState } from 'react';
import api from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import Filters from '../components/Filters';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filters, setFilters] = useState({ priority: '', dueDate: '', search: '', category: '' });

  const fetchTasks = async () => {
    const params = new URLSearchParams(filters).toString();
    const res = await api.get(`/tasks?${params}`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [filters]);

  const handleSave = async (form) => {
    if (editingTask) {
      await api.put(`/tasks/${editingTask._id}`, form);
      setEditingTask(null);
    } else {
      await api.post('/tasks', form);
    }
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const handleComplete = async (id) => {
    await api.put(`/tasks/${id}`, { completed: true });
    fetchTasks();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm onSubmit={handleSave} task={editingTask} />
      <Filters filters={filters} setFilters={setFilters} />
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={handleDelete} onComplete={handleComplete} />
    </div>
  );
};

export default Dashboard;
