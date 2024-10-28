import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../store/taskSlice';

const TaskList = ({ tasks }) => {
    const dispatch = useDispatch();
    const [editIndex, setEditIndex] = useState(null);
    const [editedTask, setEditedTask] = useState({});

    const handleEdit = (index, task) => {
        setEditIndex(index);
        setEditedTask(task);
    };

    const handleSave = (index) => {
        dispatch(editTask({ index, updatedTask: editedTask }));
        setEditIndex(null);
        setEditedTask({});
    };

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Task List</h2>
            <ul className=" grid grid-cols-2">
                {tasks.map((task, index) => (
                    <li key={index} className="p-4 border rounded shadow-sm m-4">
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editedTask.title}
                                    placeholder={editedTask.title}
                                    onChange={(e) =>
                                        setEditedTask({ ...editedTask, title: e.target.value })
                                    }
                                    className="w-full p-2 mb-2 border rounded"
                                />
                                <textarea
                                    value={editedTask.description}
                                    placeholder={editedTask.description}
                                    onChange={(e) =>
                                        setEditedTask({ ...editedTask, description: e.target.value })
                                    }
                                    className="w-full p-2 mb-2 border rounded"
                                />
                                <select
                                    value={editedTask.priority}
                                    onChange={(e) =>
                                        setEditedTask({ ...editedTask, priority: e.target.value })
                                    }
                                    className="w-full p-2 mb-2 border rounded"
                                >
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                </select>
                                <button
                                    onClick={() => handleSave(index)}
                                    className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 mr-2"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setEditIndex(null)}
                                    className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <div className=''>
                                <h3 className="text-lg font-bold">{task.title}</h3>
                                <p>{task.description}</p>
                                <p className="text-sm text-gray-600">Priority: {task.priority}</p>
                                <div className='float-end'>
                                <button
                                    onClick={() => handleEdit(index, task)}
                                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => dispatch(deleteTask(index))}
                                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
