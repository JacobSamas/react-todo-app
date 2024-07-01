import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { FiPlus } from 'react-icons/fi';

const TaskInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (text.trim()) {
      dispatch(addTask({ id: Date.now(), text, completed: false }));
      setText('');
    }
  };

  return (
    <div className="mb-4 p-3 bg-light border rounded d-flex align-items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        className="form-control me-2"
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask} className="btn btn-primary d-flex align-items-center">
        <FiPlus className="me-2" />
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
