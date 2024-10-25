import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';

const DoctorDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({ date: '', time: '' });
    const [pendingAppointments, setPendingAppointments] = useState([]);
    const [approvedAppointments, setApprovedAppointments] = useState([]);
    const [contactMessages, setContactMessages] = useState([]);
    const [researchData, setResearchData] = useState([]);
    const { currentUser } = useAuth();
    const { theme } = useContext(ThemeContext);

    const fetchAppointments = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/appointments/doctor', {
                headers: { Authorization: `Bearer ${currentUser.token}` }
            });
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error('Error fetching doctor appointments:', error);
        }
    };

    const fetchPendingAppointments = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/appointments/pending', {
                headers: { Authorization: `Bearer ${currentUser.token}` }
            });
            const data = await response.json();
            setPendingAppointments(data);
        } catch (error) {
            console.error('Error fetching pending appointments:', error);
        }
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

    const fetchContactMessages = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/contacts', {
                headers: { Authorization: `Bearer ${currentUser.token}` }
            });
            const data = await response.json();
            console.log('Fetched contact messages:', data); // API yanıtını kontrol et
            setContactMessages(data);
        } catch (error) {
            console.error('Error fetching patient messages:', error);
        }
    };

    const deleteContactMessage = async (contactId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/contacts/${contactId}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${currentUser.token}` }
            });
            if (response.ok) {
                console.log('Contact message deleted successfully');
                fetchContactMessages();
            } else {
                console.error('Failed to delete contact message');
            }
        } catch (error) {
            console.error('Error deleting contact message:', error);
        }
    };

    const handleCreateAppointment = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/appointments/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.token}`
                },
                body: JSON.stringify(newAppointment)
            });

            if (!response.ok) {
                throw new Error('Failed to create appointment');
            }

            const result = await response.json();
            console.log('Appointment created:', result);
            fetchAppointments();
        } catch (error) {
            console.error('Error creating appointment:', error);
        }
    };

    const handleApproveAppointment = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/appointments/status/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.token}`
                },
                body: JSON.stringify({ status: 'approved' })
            });

            if (!response.ok) {
                throw new Error('Failed to approve appointment');
            }

            console.log('Appointment approved');
            fetchPendingAppointments();
            fetchApprovedAppointments();
        } catch (error) {
            console.error('Error approving appointment:', error);
        }
    };

    const fetchResearchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/research', {
                headers: { Authorization: `Bearer ${currentUser.token}` }
            });
            const data = await response.json();
            if (Array.isArray(data)) {
                setResearchData(data);
            } else {
                console.error('Unexpected response data:', data);
            }
        } catch (error) {
            console.error('Error fetching research data:', error);
        }
    };

    useEffect(() => {
        fetchAppointments();
        fetchPendingAppointments();
        fetchApprovedAppointments();
        fetchContactMessages();
        fetchResearchData();
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
            <h1>Doktor Yönetim Paneli</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '80%',
                height: '150vh'
            }}>
                <div style={{
                    flex: 1,
                    margin: '20px',
                    padding: '20px',
                    border: `1px solid ${theme.borderColor}`,
                    borderRadius: '8px',
                    backgroundColor: theme.background,
                    color: theme.color,
                    boxShadow: theme.boxShadow
                }}>
                    <h2>Randevu Oluştur</h2>
                    <input
                        type="date"
                        value={newAppointment.date}
                        onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                    />
                    <input
                        type="time"
                        value={newAppointment.time}
                        onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                    />
                    <button
                        onClick={handleCreateAppointment}
                        disabled={!newAppointment.date || !newAppointment.time}
                        style={{
                            marginLeft: '20px',
                            padding: '10px 20px',
                            backgroundColor: theme.buttonBackground,
                            color: theme.buttonText,
                            border: `1px solid ${theme.borderColor}`,
                            boxShadow: theme.boxShadow,
                            transition: theme.transition,
                            cursor: (!newAppointment.date || !newAppointment.time) ? 'not-allowed' : 'pointer'
                        }}
                    >
                        Oluştur
                    </button>


                    <h2>Randevular</h2>

                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {appointments.map(appointment => (
                            <li key={appointment.id} style={{ margin: '10px 0' }}>
                                <p>{appointment.date} saat {appointment.time}</p>
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
                    <h2>Bekleyen Randevular</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {pendingAppointments.map(appointment => (
                            <li key={appointment.id} style={{ margin: '10px 0' }}>
                                <p>{appointment.date} saat {appointment.time}</p>
                                <button
                                    onClick={() => handleApproveAppointment(appointment.id)}
                                    style={{
                                        marginLeft: '20px',
                                        padding: '5px 10px',
                                        backgroundColor: theme.buttonBackground,
                                        color: theme.buttonText,
                                        border: `1px solid ${theme.borderColor}`,
                                        boxShadow: theme.boxShadow,
                                        transition: theme.transition
                                    }}
                                >
                                    Onayla
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
                                <p>{appointment.date} saat {appointment.time}</p>
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
                    <h2>Bize Ulaşanlar</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {contactMessages.map(message => (
                            <li key={message.id} style={{ margin: '20px 0', border: "1px solid black", borderRadius: "5px" }}>
                                <p>{message.name}</p>
                                <p>{message.email}</p>
                                <p>{message.phone}</p>
                                <p>{message.message}</p>
                                <p>{message.created_at}</p>
                                <button
                                    onClick={() => deleteContactMessage(message.id)}
                                    style={{
                                        padding: '5px 10px',
                                        backgroundColor: theme.buttonBackground,
                                        color: theme.buttonText,
                                        border: `1px solid ${theme.borderColor}`,
                                        boxShadow: theme.boxShadow,
                                        transition: theme.transition,
                                        marginBottom: '5px',
                                        marginLeft: '20px'
                                    }}
                                >
                                    Mesajı Sil
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
                    <h2>Güncel Araştırmalar</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {researchData.map(research => (
                            <li key={research.id} style={{ margin: '10px 0' }}>
                                <Link to={`/edit-research/${research.id}`} style={{ color: theme.linkColor }}>
                                    {research.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to={"/create-research"} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <button style={{ /* butonun stilleri */ }}>
                        Araştırma Ekle
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DoctorDashboard;
