import React from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import LoginPage from '../pages/Guest/LoginPage.jsx';
import LandingPage from '../pages/Guest/LandingPage.jsx';


function Guest() {
  
        return (
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/courses" element={<LandingPage />} />
                <Route path="/team" element={<LandingPage />} />
                <Route path="/contact-us" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
      );
  }
  
  export default Guest; 