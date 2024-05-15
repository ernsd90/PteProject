import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext.jsx'; 
import { loadAllScripts } from './utils/loadScript.js';

import Guest from './routes/Guest.js'
import Student from './routes/Student.js'

let scriptsLoaded = true;

const App = () => {

    useEffect(() => {
      if(scriptsLoaded === true ){
        loadAllScripts();
        scriptsLoaded = false;
      }
      


    }, []);



return (

  <AuthProvider>
    <Router>
        <Guest />
        <Student />
    </Router>
    <div className="scriptjsinclude"></div>
  </AuthProvider>
    );
};

export default App;