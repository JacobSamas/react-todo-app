import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) =>{
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'DELETE_TASK':
            return state.filter((task) => task.id !== action.payload);
        case 'EDIT_TASK':
            return state.map((task) =>
                task.id === action.payload.id ? { ...task, text: action.payload.text} : task
            );
        default:
            return state;
    }
};

export default combineReducers({
    tasks: tasksReducers,
});