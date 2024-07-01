import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="app bg-white text-black min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl mb-4">React To-Do Application</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
