import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';
import './TaskItem.css';

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

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
