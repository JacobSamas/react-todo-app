import React from 'react';
import { FiHome, FiCalendar, FiSettings, FiLogOut, FiList, FiPlus } from 'react-icons/fi';

const Sidebar = () => {
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
            <FiHome className="me-2" />
            Upcoming
          </li>
          <li className="mb-3">
            <FiCalendar className="me-2" />
            Today
          </li>
        </ul>
      </nav>
      <div className="mt-4">
        <h2 className="h6">Lists</h2>
        <ul className="list-unstyled">
          <li className="mb-3">
            <FiList className="me-2" />
            Personal
          </li>
          <li className="mb-3">
            <FiList className="me-2" />
            Work
          </li>
          <li className="mb-3">
            <FiList className="me-2" />
            List 1
          </li>
          <li className="mb-3">
            <FiPlus className="me-2" />
            Add New List
          </li>
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
