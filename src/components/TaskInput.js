import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import './TaskInput.css';

const TaskInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (text.trim()) {
      dispatch(addTask({ id: Date.now(), text }));
      setText('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
