import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/PatientDash.css'; // CSS dosyasını ekliyoruz

const PatientDash = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigate = useNavigate();

  const handleAddAppointment = () => {
    if (selectedDoctor && selectedDate && selectedTime) {
      const newAppointment = {
        id: appointments.length + 1,
        doctor: selectedDoctor,
        date: selectedDate,
        time: selectedTime
      };
      setAppointments([...appointments, newAppointment]);
      setSelectedDoctor('');
      setSelectedDate('');
      setSelectedTime('');
    }
  };

  const handleRemoveAppointment = (appointmentId) => {
    setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
  };

  const handleLogout = () => {
    navigate('/'); // Kullanıcıyı ana sayfaya yönlendir
  };

  return (
    <div className="patient-dashboard">
      <h2>Hasta Paneli</h2>
      <div className="appointments">
        <h3>Randevular</h3>
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id}>
              <span>{appointment.doctor} - {appointment.date} - {appointment.time}</span>
              <button onClick={() => handleRemoveAppointment(appointment.id)}>İptal</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-appointment">
        <h3>Randevu Ekle</h3>
        <div>
          <label htmlFor="doctorSelect">Doktor Seçin:</label>
          <select id="doctorSelect" value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
            <option value="">Bir doktor seçin</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            {/* Diğer doktorlar buraya eklenir */}
          </select>
        </div>
        <div>
          <label htmlFor="dateInput">Tarih:</label>
          <input type="date" id="dateInput" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="timeInput">Saat:</label>
          <input type="time" id="timeInput" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required />
        </div>
        <button onClick={handleAddAppointment}>Randevu Ekle</button>
      </div>
      <button className="logout-button" onClick={handleLogout}>ÇIKIŞ YAP</button>
    </div>
  );
};

export default PatientDash;
