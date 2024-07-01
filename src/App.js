import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';

const TaskInput = lazy(() => import('./components/TaskInput'));
const TaskList = lazy(() => import('./components/TaskList'));

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 d-flex flex-column">
          <Header />
          <main className="flex-grow-1 p-4 bg-light">
            <Suspense fallback={<div>Loading...</div>}>
              <TaskInput />
              <Routes>
                <Route path="/upcoming" element={<TaskList />} />
                <Route path="/today" element={<TaskList />} />
                <Route path="/all" element={<TaskList />} />
                <Route path="/personal" element={<TaskList />} />
                <Route path="/work" element={<TaskList />} />
                <Route path="/:list" element={<TaskList />} />
                <Route path="/" element={<TaskList />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
