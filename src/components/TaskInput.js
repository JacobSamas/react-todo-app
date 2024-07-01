import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  { addTask } from '../redux/actions';

const TaskInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (text.trim()) {
            dispatch(addTask({ id: Date.now(), text}));
            setText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;