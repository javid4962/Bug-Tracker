// src/components/TaskForm.js
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../store/taskSlice';

const TaskForm = ({ taskToEdit, setTaskToEdit }) => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: 'Low',
        status: 'Open',
        assignee: '',
        dueDate: '',
        tags: '',
        reporter: '',
    });

    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit);
        } else {
            setTask({
                title: '',
                description: '',
                priority: 'Low',
                status: 'Open',
                assignee: '',
                dueDate: '',
                tags: '',
                reporter: '',
            });
        }
    }, [taskToEdit]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskToEdit) {
            dispatch(editTask({ id: taskToEdit.id, updatedTask: task }));
            setTaskToEdit(null);
        } else {
            dispatch(addTask(task));
        }
        setTask({
            title: '',
            description: '',
            priority: 'Low',
            status: 'Open',
            assignee: '',
            dueDate: '',
            tags: '',
            reporter: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-4">{taskToEdit ? 'Edit Task' : 'Create New Task'}</h3>
            <input name="title" placeholder="Title" value={task.title} onChange={handleChange} className="p-2 mb-2 w-full border rounded" required />
            <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} className="p-2 mb-2 w-full border rounded" required />
            <select name="priority" value={task.priority} onChange={handleChange} className="p-2 mb-2 w-full border rounded">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <select name="status" value={task.status} onChange={handleChange} className="p-2 mb-2 w-full border rounded">
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
            </select>
            <input name="assignee" placeholder="Assignee" value={task.assignee} onChange={handleChange} className="p-2 mb-2 w-full border rounded" />
            <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} className="p-2 mb-2 w-full border rounded" />
            <input name="tags" placeholder="Tags (comma separated)" value={task.tags} onChange={handleChange} className="p-2 mb-2 w-full border rounded" />
            <input name="reporter" placeholder="Reporter" value={task.reporter} onChange={handleChange} className="p-2 mb-2 w-full border rounded" />
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;
