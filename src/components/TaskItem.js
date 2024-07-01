import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleComplete } from '../redux/tasksSlice';
import { FiEdit, FiCheck, FiTrash2, FiX } from 'react-icons/fi';
import { Modal, Button } from 'react-bootstrap';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    setShowModal(false);
  };

  const handleEdit = () => {
    setIsEditing(false);
    dispatch(editTask({ id: task.id, text }));
  };

  const handleToggleComplete = () => {
    dispatch(toggleComplete(task.id));
  };

  return (
    <>
      <div className={`d-flex align-items-center justify-content-between p-3 mb-2 bg-white border rounded ${task.completed ? 'bg-success bg-opacity-10' : ''}`}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
              className="form-control me-2"
            />
            <button onClick={handleEdit} className="btn btn-success me-2">
              <FiCheck />
            </button>
            <button onClick={() => setIsEditing(false)} className="btn btn-secondary">
              <FiX />
            </button>
          </>
        ) : (
          <>
            <span className={`flex-grow ${task.completed ? 'text-decoration-line-through' : ''}`}>{task.text}</span>
            <button onClick={() => setIsEditing(true)} className="btn btn-warning me-2">
              <FiEdit />
            </button>
            <button onClick={handleToggleComplete} className="btn btn-success me-2">
              {task.completed ? <FiX /> : <FiCheck />}
            </button>
            <button onClick={() => setShowModal(true)} className="btn btn-danger">
              <FiTrash2 />
            </button>
          </>
        )}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskItem;
