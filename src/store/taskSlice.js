// src/store/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ ...action.payload, id: Date.now(), totalTime: 0 });
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        editTask: (state, action) => {
            const { id, updatedTask } = action.payload;
            const taskIndex = state.tasks.findIndex((task) => task.id === id);
            if (taskIndex >= 0) {
                state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
            }
        },
        updateTask: (state, action) => {
            const { id, updates } = action.payload;
            const taskIndex = state.tasks.findIndex((task) => task.id === id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updates };
            }
        },
    },
});

export const { addTask, deleteTask, editTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
