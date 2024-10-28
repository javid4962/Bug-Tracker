import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const tasks = useSelector((state) => state.tasks);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
            <TaskForm />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Dashboard;
