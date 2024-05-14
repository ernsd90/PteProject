import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext, AuthProvider } from './utils/AuthContext.jsx'; 
import { PrivateRoute } from './utils/PrivateRoute.jsx'; 
import LoginPage from './pages/Guest/LoginPage.jsx';
import LandingPage from './pages/Guest/LandingPage.jsx';
import StudentDashboard from './pages/Student/StudentDashboard.jsx';// Import your AuthContext



const App = () => {
return (
    <AuthProvider>
      <Router>
        <AuthContext.Consumer>
          {(context) => {
            const { isLoggedIn } = context;
                return (
                
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/login"  element={<LoginPage onLogin={context.handleLogin} />} />

                            {/* Protected route for Student Dashboard with role check */}
                            <Route
                            path="/student-dashboard"
                            element={
                                <PrivateRoute role="Student">
                                <StudentDashboard />
                                </PrivateRoute>
                            }
                            />

                            {/* Add other protected routes with appropriate roles */}
                    </Routes>
                );
            }}
    </AuthContext.Consumer>
      </Router>
    </AuthProvider>
    );
};

export default App;