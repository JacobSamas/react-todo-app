import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiCalendar, FiSettings, FiLogOut, FiList, FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../redux/tasksSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [newList, setNewList] = useState('');
  const lists = useSelector(state => state.tasks.lists);

  const handleAddList = () => {
    if (newList.trim() !== '') {
      dispatch(addList(newList));
      setNewList('');
    }
  };

  return (
    <div className="d-flex flex-column bg-light border-right vh-100 p-3">
      <div className="mb-4">
        <h1 className="h4 mb-3">Menu</h1>
        <input
          type="text"
          placeholder="Search"
          className="form-control"
        />
      </div>
      <nav>
        <h2 className="h6">Tasks</h2>
        <ul className="list-unstyled">
          <li className="mb-3">
            <Link to="/upcoming" className="text-decoration-none text-dark">
              <FiCalendar className="me-2" />
              Upcoming
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/today" className="text-decoration-none text-dark">
              <FiCalendar className="me-2" />
              Today
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/all" className="text-decoration-none text-dark">
              <FiHome className="me-2" />
              View All Tasks
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-4">
        <h2 className="h6">Lists</h2>
        <ul className="list-unstyled">
          <li className="mb-3">
            <Link to="/personal" className="text-decoration-none text-dark">
              <FiList className="me-2" />
              Personal
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/work" className="text-decoration-none text-dark">
              <FiList className="me-2" />
              Work
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="h6">Add New List</h2>
        <div className="mb-3 d-flex">
          <input
            type="text"
            value={newList}
            onChange={(e) => setNewList(e.target.value)}
            className="form-control me-2"
            placeholder="New List"
          />
          <button className="btn btn-primary" onClick={handleAddList}>
            <FiPlus />
          </button>
        </div>
        <ul className="list-unstyled">
          {lists.map((list, index) => (
            <li className="mb-3" key={index}>
              <Link to={`/${list.toLowerCase()}`} className="text-decoration-none text-dark">
                <FiList className="me-2" />
                {list}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="h6">Tags</h2>
        <div className="mb-2">
          <span className="badge bg-primary me-2">Tag 1</span>
          <span className="badge bg-danger">Tag 2</span>
        </div>
        <button className="btn btn-outline-secondary btn-sm">+ Add Tag</button>
      </div>
      <div className="mt-auto">
        <button className="btn btn-outline-secondary btn-block my-2">
          <FiSettings className="me-2" />
          Settings
        </button>
        <button className="btn btn-outline-secondary btn-block">
          <FiLogOut className="me-2" />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
