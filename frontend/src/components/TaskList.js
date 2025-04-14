import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, ...handlers }) => (
  <div>
    {tasks.length === 0 ? (
      <p>No tasks found.</p>
    ) : (
      tasks.map((task) => (
        <TaskItem key={task._id} task={task} {...handlers} />
      ))
    )}
  </div>
);

export default TaskList;
