import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { useMatch } from 'react-router-dom';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState('all');
  const match = useMatch('/:path');

  const getFilteredTasks = () => {
    let filteredTasks = tasks;

    if (match && match.params.path === 'today') {
      const today = new Date().toISOString().split('T')[0];
      filteredTasks = tasks.filter(task => task.dueDate === today);
    } else if (match && match.params.path === 'upcoming') {
      const today = new Date().toISOString().split('T')[0];
      filteredTasks = tasks.filter(task => task.dueDate > today);
    } else if (match && match.params.path !== 'all') {
      const listName = match.params.path.charAt(0).toUpperCase() + match.params.path.slice(1);
      filteredTasks = tasks.filter(task => task.list === listName);
    }

    if (filter === 'completed') {
      filteredTasks = filteredTasks.filter(task => task.completed);
    } else if (filter === 'active') {
      filteredTasks = filteredTasks.filter(task => !task.completed);
    }

    return filteredTasks;
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div>
      <div className="d-flex justify-content-center mb-4">
        <button onClick={() => setFilter('all')} className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-secondary'} me-2`}>
          All
        </button>
        <button onClick={() => setFilter('active')} className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-secondary'} me-2`}>
          Active
        </button>
        <button onClick={() => setFilter('completed')} className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-secondary'}`}>
          Completed
        </button>
      </div>
      <div className="task-list">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
