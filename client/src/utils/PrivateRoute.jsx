import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'; // For navigation
import { AuthContext } from './AuthContext.jsx'; // Import your AuthContext

const PrivateRoute = ({ role, children }) => {
  const { isLoggedIn, token, userRole } = useContext(AuthContext); // Access state from context

  if (!isLoggedIn || userRole !== role) {
    // Redirect to login if not logged in or role doesn't match
    return <Navigate to="/login" replace />;
  }

  return children ? <Outlet /> : children; // Render child component or content
};

export {PrivateRoute};
