import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiUrl } from '../config';

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  token: null,
  setToken: () => {},
  UserRole: null,
  setUserRole: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [UserRole, setUserRole] = useState(null);

  //const navigate = useNavigate();

  useEffect(() => {
    // Check local storage or session storage for a stored token on application load
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
      setToken(UserRole);
    }
  }, []);

  // Implement login logic (fetch data, handle response)
  const handleLogin = async (credentials) => {
    const response = await fetch(ApiUrl+'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (data.token) {
        const role = data.role;
      setIsLoggedIn(true);
      setToken(data.token);
      setUserRole(role);
      localStorage.setItem('authToken', data.token); // Store token securely
      if (role === "Student") {
       // navigate('/student-dashboard');
      } else {
       // navigate('/');
      }
    } else {
      // Handle login failure
      console.error('Login faileds:', data.message);
    }
  };

  // Implement logout logic (remove token from state/storage)
  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem('authToken'); // Remove stored token
  };

  const value = { isLoggedIn, setIsLoggedIn, token, setToken, handleLogin, handleLogout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
