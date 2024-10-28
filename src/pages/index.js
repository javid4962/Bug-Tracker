// src/pages/index.js
import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import Dashboard from '../components/Dashboard';

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <div>
            {isAuthenticated ? <Dashboard /> : <AuthForm onLogin={handleLogin} />}
        </div>
    );
};

export default Home;
