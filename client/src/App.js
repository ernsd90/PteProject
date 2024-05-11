import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Guest/LoginPage.jsx';
import LandingPage from './pages/Guest/LandingPage.jsx';


const App = () => {
    return (
        <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
                {/* You can add more routes here */}
            </Routes>
        </Router>
    );
};

export default App;
