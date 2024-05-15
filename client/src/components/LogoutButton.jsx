import React from 'react';
import { useAuth } from '../utils/AuthContext'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const [,logout] = useAuth();

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault(); // Prevent the default anchor tag behavior
        logout();
        navigate('/login'); // Navigate to the login page after logout
    };

    return (
        <a href="/login"  onClick={handleLogout}>
            <i className="feather-log-out" />
            <span>Logout</span>
        </a>
       
    );
};

export default LogoutButton;
