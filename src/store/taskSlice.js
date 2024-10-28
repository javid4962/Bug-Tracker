import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.splice(action.payload, 1);
        },
        editTask: (state, action) => {
            const { index, updatedTask } = action.payload;
            state[index] = { ...state[index], ...updatedTask };
        },
    },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
