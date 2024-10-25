import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ThemeContext } from '../ThemeContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const { theme } = useContext(ThemeContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (error) {
            setError('Failed to login. Please check your email and password or register.');
            console.error('Failed to login', error);
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div style={{ ...styles.loginContainer, backgroundColor: theme.background }}>
            <div style={{ ...styles.loginBox, backgroundColor: theme.boxBackground, color: theme.textColor }}>
                <h1 style={styles.title}>Giriş Yap</h1>
                <form onSubmit={handleSubmit} style={styles.form}>
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
                    <button type="submit" style={{ ...styles.button, backgroundColor: theme.buttonBackground, color: theme.buttonText }}>Giriş Yap</button>
                    {error && <p style={styles.errorMessage}>{error}</p>}
                    <p style={{marginTop:"20px"}}>Hesabınız yok mu?</p>
                    <button onClick={handleRegister} style={{ ...styles.registerButton, backgroundColor: theme.buttonBackground, color: theme.buttonText }}>Kayıt Ol</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',  // Default background color
    },
    loginBox: {
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
        color: 'white',  // Default button text color
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '15px'
    },
    registerButton: {
        padding: '15px',
        fontSize: '16px',
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

export default LoginPage;
