import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';

const PrivateRoute = ({ children }) => {
    const [authToken] = useAuth();
    return authToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
