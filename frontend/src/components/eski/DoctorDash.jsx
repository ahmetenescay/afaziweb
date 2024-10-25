import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/DoctorDash.css';
import '../assets/HeadDoctorDash.css'; // HeadDoctorDash bileşeninin stillerini ekliyoruz
import HeadDoctorDash from './HeadDoctorDash';

const DoctorDash = () => {
  const [appointments, setAppointments] = useState([]);
  const [workingHours, setWorkingHours] = useState({ start: '09:00', end: '17:00' });
  const [loggedIn, setLoggedIn] = useState(false); // loggedIn durumunu ekliyoruz
  const navigate = useNavigate();

  const handleAddAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const handleRemoveAppointment = (appointmentId) => {
    setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
  };

  const handleSetWorkingHours = (start, end) => {
    setWorkingHours({ start, end });
  };

  const handleLogout = () => {
    setLoggedIn(false); // Çıkış yapıldığında loggedIn durumunu false yap
    navigate('/');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Burada e-mail ve şifre ile ilgili giriş işlemleri yapılabilir
    console.log("Logged in!");
    setLoggedIn(true); // Giriş başarılı olduğunda loggedIn durumunu true yap
  };

  const handleHeadDoctor = () => {
    navigate('/headdoctor'); // Butona tıklandığında '/headdoctor' rotasına yönlendir
  };

  return (
    <div className="doctor-dashboard">
      <div className="dashboard-container">
        {loggedIn ? ( // loggedIn true ise, yani giriş yapılmışsa, HeadDoctorDash bileşenini göster
          <div className="dashboard-right">
            <HeadDoctorDash />
          </div>
        ) : (
          <div className="dashboard-left">
            <h2>Doctor Dashboard</h2>
            <div className="working-hours">
              <h3>Working Hours</h3>
              <p>Start: {workingHours.start}, End: {workingHours.end}</p>
              <button onClick={() => handleSetWorkingHours('09:00', '17:00')}>Set Default Working Hours</button>
            </div>
            <div className="appointments">
              <h3>Appointments</h3>
              <ul>
                {appointments.map(appointment => (
                  <li key={appointment.id}>
                    <span>{appointment.date} - {appointment.time}</span>
                    <button onClick={() => handleRemoveAppointment(appointment.id)}>Cancel</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="add-appointment">
              <h3>Add Appointment</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const date = e.target.elements.date.value;
                const time = e.target.elements.time.value;
                handleAddAppointment({ id: appointments.length + 1, date, time });
                e.target.reset();
              }}>
                <input type="date" name="date" required />
                <input type="time" name="time" min={workingHours.start} max={workingHours.end} required />
                <button type="submit">Add</button>
              </form>
            </div>
            <button className="logout-button" onClick={handleLogout}>Ana Sayfaya Dön</button>
            <button className="head-doctor-button" onClick={handleHeadDoctor}>Head Doctor Paneli</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDash;
