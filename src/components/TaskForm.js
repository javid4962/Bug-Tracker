import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        dispatch(addTask({ title, description, priority, status: 'Open' }));
        setTitle('');
        setDescription('');
    };

    return (
        <div className="bg-white p-6 rounded shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Create Task</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            ></textarea>
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button
                onClick={handleAddTask}
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
                Add Task
            </button>
        </div>
    );
};

export default TaskForm;
