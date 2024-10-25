import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ThemeContext } from '../ThemeContext';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const { theme } = useContext(ThemeContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            await register(name, email, password);
            navigate('/dashboard');
        } catch (error) {
            setError('Failed to register. Please try again.');
            console.error('Failed to register', error);
        }
    };

    return (
        <div style={{ ...styles.registerContainer, backgroundColor: theme.background }}>
            <div style={{ ...styles.registerBox, backgroundColor: theme.boxBackground, color: theme.textColor }}>
                <h1 style={styles.title}>Kayıt Ol</h1>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input 
                        type="text" 
                        placeholder="İsim" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                        style={styles.input}
                    />
                    <input 
                        type="email" 
                        placeholder="e-Posta" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                        style={styles.input}
                    />
                    <input 
                        type="password" 
                        placeholder="Şifre" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                        style={styles.input}
                    />
                    <input 
                        type="password" 
                        placeholder="Şifreyi Onayla" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={{ ...styles.button, backgroundColor: theme.buttonBackground, color: theme.buttonText }}>Kayıt Ol</button>
                </form>
                {error && <p style={styles.errorMessage}>{error}</p>}
            </div>
        </div>
    );
};

const styles = {
    registerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',  // Default background color
    },
    registerBox: {
        backgroundColor: '#fff',  // Default box background color
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '400px',
        color: '#000',  // Default text color
    },
    title: {
        marginBottom: '30px',
        fontSize: '24px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: '15px',
        padding: '15px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        padding: '15px',
        fontSize: '16px',
        backgroundColor: '#007bff',  // Default button background color
        color: 'white',  // Default button text color
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '15px'
    },
    errorMessage: {
        color: 'red',
        marginTop: '20px',
    },
};

export default RegisterPage;
