import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate  } from 'react-router-dom';
import StudentDashboard from '../pages/Student/StudentDashboard.jsx';
import StudentProfile from '../pages/Student/StudentProfile.jsx';
import PrivateRoute from '../utils/PrivateRoute.jsx';

function Student() {
  
    //const [authToken] = useContext(Auth);
    return (
        <Routes>
          <Route path="/student-dashboard" element={ <PrivateRoute> <StudentDashboard /> </PrivateRoute>} />
          <Route path="/mock-test" element={ <PrivateRoute> <StudentDashboard /> </PrivateRoute>} />          
          <Route path="/knowledge-zone" element={ <PrivateRoute> <StudentDashboard /> </PrivateRoute>} />       
          <Route path="/student-profile" element={ <PrivateRoute> <StudentProfile /> </PrivateRoute>} />       
          <Route path="/logout" element={ <PrivateRoute> <StudentDashboard /> </PrivateRoute>} />   
        </Routes>
    );
  }
  
  export default Student;