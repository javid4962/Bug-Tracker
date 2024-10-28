// src/components/Dashboard.js
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
    const [taskToEdit, setTaskToEdit] = useState(null);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
            <TaskList setTaskToEdit={setTaskToEdit} />
        </div>
    );
};

export default Dashboard;
