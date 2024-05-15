import React, { createContext, useState, useContext,useEffect  } from 'react';

export const Auth = createContext()

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || '')
    const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
    const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
    const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || '');

    function login(token, userName,firstName,lastName, userRole) {
        setAuthToken(token);
        setUserName(userName);
        setFirstName(firstName);
        setLastName(lastName);
        setUserRole(userRole);
        localStorage.setItem('authToken', token);
        localStorage.setItem('userName', userName);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('userRole', userRole);
    }

    function logout() {
        setAuthToken(null);
        setUserName('');
        setFirstName('');
        setLastName('');
        setUserRole('');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('userRole');
    }

    useEffect(() => {
        // Check if the auth token exists in localStorage on initial load
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            setAuthToken(storedToken);
        }
    }, []);


    return (
        <Auth.Provider value={[login, logout, userName, firstName, lastName, userRole,authToken]}>
            {children}
        </Auth.Provider>
    );
}

export const useAuth = () => {
  return useContext(Auth);
};

