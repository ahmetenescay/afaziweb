// Root.js
import React from 'react';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // AuthProvider'ı doğru yerden içe aktarın

function Root() {
    return (
        <React.StrictMode>
            <AuthProvider>
                <App />
            </AuthProvider>
        </React.StrictMode>
    );
}

export default Root;
