// src/components/TaskList.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../store/taskSlice';

const TaskList = ({ setTaskToEdit }) => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({ priority: '', status: '' });
    const [sortCriteria, setSortCriteria] = useState('');

    const filteredTasks = tasks.filter((task) => 
        (!filter.priority || task.priority === filter.priority) &&
        (!filter.status || task.status === filter.status)
    ).sort((a, b) => {
        if (sortCriteria === 'priority') return a.priority.localeCompare(b.priority);
        if (sortCriteria === 'status') return a.status.localeCompare(b.status);
        return 0;
    });

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Task List</h2>
            {/* Filter & Sort Controls */}
            <div className="flex gap-1 flex-wrap sm:gap-2 mb-4">
                <select name="priority" onChange={(e) => setFilter({ ...filter, priority: e.target.value })} className="p-2 border rounded">
                    <option value="">Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <select name="status" onChange={(e) => setFilter({ ...filter, status: e.target.value })} className="p-2 border rounded">
                    <option value="">Status</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                </select>
                <select onChange={(e) => setSortCriteria(e.target.value)} className="p-2 border rounded">
                    <option value="">Sort By</option>
                    <option value="priority">Priority</option>
                    <option value="status">Status</option>
                </select>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
            {filteredTasks.map((task) => (
                <div key={task.id} className="border p-4 m-2 rounded">
                    <h3 className="text-lg font-bold">{task.title}</h3>
                    <p className="mb-2">{task.description}</p>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-600">Priority: {task.priority}</p>
                            <p className="text-gray-600">Status: {task.status}</p>
                            <p className="text-gray-600">Assignee: {task.assignee}</p>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => setTaskToEdit(task)} className="bg-blue-500 text-white py-1 px-2 rounded">Edit</button>
                            <button onClick={() => dispatch(deleteTask(task.id))} className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default TaskList;
