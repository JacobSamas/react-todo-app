import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleComplete } from '../redux/tasksSlice';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(false);
    dispatch(editTask({ id: task.id, text }));
  };

  const handleToggleComplete = () => {
    dispatch(toggleComplete(task.id));
  };

  return (
    <div className={`flex items-center justify-between p-2 mb-2 border rounded ${task.completed ? 'bg-green-100' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
            className="p-2 border rounded mr-2 flex-grow"
          />
          <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded">
            Save
          </button>
        </>
      ) : (
        <>
          <span className={`flex-grow ${task.completed ? 'line-through' : ''}`}>{task.text}</span>
          <button onClick={() => setIsEditing(true)} className="px-2 py-1 bg-yellow-500 text-white rounded mr-2">
            Edit
          </button>
          <button onClick={handleToggleComplete} className="px-2 py-1 bg-green-500 text-white rounded mr-2">
            {task.completed ? 'Unmark' : 'Complete'}
          </button>
          <button onClick={handleDelete} className="px-2 py-1 bg-red-500 text-white rounded">
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
