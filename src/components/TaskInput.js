import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { FiPlus } from 'react-icons/fi';

const TaskInput = () => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [selectedList, setSelectedList] = useState('');
  const lists = useSelector(state => state.tasks.lists);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (text.trim() && selectedList) {
      dispatch(addTask({ id: Date.now(), text, completed: false, dueDate, list: selectedList }));
      setText('');
      setDueDate('');
      setSelectedList('');
    }
  };

  return (
    <div className="mb-4 p-3 bg-light border rounded d-flex align-items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="form-control me-2"
        placeholder="Add a new task"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="form-control me-2"
      />
      <select
        value={selectedList}
        onChange={(e) => setSelectedList(e.target.value)}
        className="form-control me-2"
      >
        <option value="">Select List</option>
        {lists.map((list, index) => (
          <option key={index} value={list}>{list}</option>
        ))}
      </select>
      <button onClick={handleAddTask} className="btn btn-primary d-flex align-items-center">
        <FiPlus className="me-2" />
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
