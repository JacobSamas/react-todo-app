import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

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
    <div className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        className="p-2 border rounded mr-2"
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask} className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
