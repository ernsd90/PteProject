import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext.jsx'; 
import { loadScript, waitForElement } from './utils/loadScript.js';

import Guest from './routes/Guest.js'
import Student from './routes/Student.js'


const App = () => {


  useEffect(() => {
    waitForElement('.rbt-footer', () => {
        loadScript('assets/js/main.js', () => {
            console.log('main.js loaded and initialized');
        });
    });
}, []); 


return (

  <AuthProvider>
    <Router>
        <Guest />
        <Student />
        {/* Redirect to login if route does not exist */}
        {/* <Routes>
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes> */}
    </Router>
  </AuthProvider>
    );
};

export default App;