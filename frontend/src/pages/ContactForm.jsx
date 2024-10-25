import React, { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const { theme } = useContext(ThemeContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json().catch(() => {
                    throw new Error('Failed to parse JSON');
                });
            })
            .then(data => {
                if (data.message) {
                    alert(data.message);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    });
                } else {
                    alert('Error saving contact information');
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert('There was an error! ' + error.message);
            });
    };

    return (
        <div style={{ ...styles.contactContainer, backgroundColor: theme.background }}>
            <div style={{ ...styles.contactBox, backgroundColor: theme.boxBackground, color: theme.textColor }}>
                <h1 style={{ ...styles.title, color: theme.textColor }}>Bize Ulaşın</h1>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder="İsim"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ ...styles.input, borderColor: theme.inputBorder }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-posta"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ ...styles.input, borderColor: theme.inputBorder }}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Telefon Numarası"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ ...styles.input, borderColor: theme.inputBorder }}
                    />
                    <textarea
                        name="message"
                        placeholder="Mesajınız"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ ...styles.input, height: '100px', borderColor: theme.inputBorder }}
                        required
                    />
                    <button type="submit" style={{ ...styles.button, backgroundColor: theme.buttonBackground, color: theme.buttonText }}>Mesaj Gönder</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    contactContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5', // Default background color
    },
    contactBox: {
        backgroundColor: '#fff', // Default box background color
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '400px',
        color: '#000', // Default text color
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
        color: 'white', // Default button text color
        backgroundColor: '#28a745', // Default button background color
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '15px',
    },
};

export default ContactForm;
