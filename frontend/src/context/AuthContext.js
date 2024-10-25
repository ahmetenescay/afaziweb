import React, { createContext, useContext, useState, useEffect } from 'react';

// AuthContext'i oluşturun
const AuthContext = createContext();

// useAuth hook'unu tanımlayın
export function useAuth() {
    return useContext(AuthContext);
}

// AuthProvider bileşenini tanımlayın
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // LocalStorage'den kullanıcıyı alın
        const user = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(user);
    }, []);

    const login = async (email, password) => {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            setCurrentUser(null);
            throw new Error('Failed to log in');
        }

        const data = await response.json();
        localStorage.setItem('currentUser', JSON.stringify(data));
        setCurrentUser(data);
    };

    const register = async (name, email, password) => {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, role: 'patient' }),
        });

        if (!response.ok) {
            throw new Error('Failed to register');
        }

        const data = await response.json();
        localStorage.setItem('currentUser', JSON.stringify(data));
        setCurrentUser(data);
    };

    const logout = () => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
