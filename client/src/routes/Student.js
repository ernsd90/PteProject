import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import StudentDashboard from '../pages/Student/StudentDashboard.jsx';
import StudentProfile from '../pages/Student/StudentProfile.jsx';
import ReadLoudTest from '../pages/Student/speaking/ReadLoud.jsx';
import PrivateRoute from '../utils/PrivateRoute.jsx';

function Student() {
  
    //const [authToken] = useContext(Auth);
    return (
        <Routes>
          <Route path="/student-dashboard" element={ <PrivateRoute> <StudentDashboard /> </PrivateRoute>} />
          <Route path="/mock-test" element={ <PrivateRoute> <StudentDashboard /> </PrivateRoute>} />          
          <Route path="/knowledge-zone" element={ <PrivateRoute> <StudentDashboard /> </PrivateRoute>} />       
          <Route path="/student-profile" element={ <PrivateRoute> <StudentProfile /> </PrivateRoute>} />       

          <Route path="/student/reading/fib_wr/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />
          <Route path="/student/reading/fib_rd/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />
          <Route path="/student/reading/fib_mcs/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />
          <Route path="/student/reading/r_mcm/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />
          <Route path="/student/reading/fib_ro/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />

          <Route path="/student/listening/l_hcs/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/listening/l_smw/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/listening/l_mcs/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/listening/l_mcm/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/listening/l_sst/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/listening/l_hiw/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/listening/l_fib/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/listening/l_wfd/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/listening/l_sst/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          
          <Route path="/student/speaking/read_aloud/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/speaking/repeat_sentences/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/speaking/describe_image/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/speaking/retell_lectures/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/speaking/answer_questions/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          
          <Route path="/student/writing/summarize_written/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          <Route path="/student/writing/write_essay/*" element={ <PrivateRoute> <ReadLoudTest /> </PrivateRoute>} />    
          
        
        </Routes>
    );
  }
  
  export default Student;