import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import { ThemeContext } from '../ThemeContext';

const PatientDashboard = () => {
    const [availableAppointments, setAvailableAppointments] = useState([]);
    const [approvedAppointments, setApprovedAppointments] = useState([]);
    const { currentUser } = useAuth();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const fetchAvailableAppointments = async () => {
        const response = await fetch('http://localhost:5000/api/appointments/available', {
            headers: { Authorization: `Bearer ${currentUser.token}` }
        });
        const data = await response.json();
        setAvailableAppointments(data);
    };

    const fetchApprovedAppointments = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/appointments/approved', {
                headers: { Authorization: `Bearer ${currentUser.token}` }
            });
            const data = await response.json();
            setApprovedAppointments(data);
        } catch (error) {
            console.error('Error fetching approved appointments:', error);
        }
    };

    const handleSelectAppointment = async (id) => {
        await fetch(`http://localhost:5000/api/appointments/book/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.token}`
            }
        });
        fetchAvailableAppointments();
    };

    useEffect(() => {
        fetchAvailableAppointments();
        fetchApprovedAppointments();
    }, []);

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '20px', 
            backgroundColor: theme.background, 
            color: theme.color,
            transition: theme.transition 
        }}>
            <h1>Hasta Paneli</h1>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                width: '80%', 
                height: '80vh' 
            }}>
                <div style={{ 
                    flex: 1, 
                    margin: '20px', 
                    padding: '20px', 
                    border: `1px solid ${theme.borderColor}`, 
                    borderRadius: '8px', 
                    overflowY: 'auto', 
                    backgroundColor: theme.background, 
                    color: theme.color,
                    boxShadow: theme.boxShadow 
                }}>
                    <h2>Seçilebilir Randevular</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {availableAppointments.map(appointment => (
                            <li key={appointment.id} style={{ margin: '10px 0' }}>
                                Tarih: {appointment.date} Saat: {appointment.time}
                                <button 
                                    onClick={() => handleSelectAppointment(appointment.id)} 
                                    style={{ 
                                        marginLeft: '10px', 
                                        padding: '5px 10px', 
                                        cursor: 'pointer',
                                        backgroundColor: theme.buttonBackground, 
                                        color: theme.buttonText, 
                                        border: `1px solid ${theme.borderColor}`,
                                        boxShadow: theme.boxShadow,
                                        transition: theme.transition 
                                    }}
                                >
                                    Seç
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ 
                    flex: 1, 
                    margin: '20px', 
                    padding: '20px', 
                    border: `1px solid ${theme.borderColor}`, 
                    borderRadius: '8px', 
                    overflowY: 'auto', 
                    backgroundColor: theme.background, 
                    color: theme.color,
                    boxShadow: theme.boxShadow 
                }}>
                    <h2>Onaylanmış Randevular</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {approvedAppointments.map(appointment => (
                            <li key={appointment.id} style={{ margin: '10px 0' }}>
                               Tarih: {appointment.date} Saat: {appointment.time}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
