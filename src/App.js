import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <main className="flex-grow-1 p-4 bg-light">
          <TaskInput />
          <TaskList />
        </main>
      </div>
    </div>
  );
};

export default App;
