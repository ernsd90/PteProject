import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { AuthProvider,useAuth } from './utils/AuthContext.jsx'; 
//import { PrivateRoute } from './utils/PrivateRoute.jsx'; 

import Guest from './routes/Guest.js'
import Student from './routes/Student.js'
import PrivateRoute from './utils/PrivateRoute.jsx';


const App = () => {
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