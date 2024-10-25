// models/Appointment.js
const db = require('../config/db');

const createAppointmentTable = () => {
    const stmt = `
    CREATE TABLE IF NOT EXISTS appointments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT,
        time TEXT,
        doctorId INTEGER,
        patientId INTEGER,
        status TEXT,
        FOREIGN KEY (doctorId) REFERENCES users(id),
        FOREIGN KEY (patientId) REFERENCES users(id)
    )`;
    db.exec(stmt);
};

createAppointmentTable();

const insertAppointment = (date, time, doctorId, status = 'available') => {
    const stmt = db.prepare('INSERT INTO appointments (date, time, doctorId, status) VALUES (?, ?, ?, ?)');
    return stmt.run(date, time, doctorId, status);
};

const bookAppointment = (id, patientId) => {
    const stmt = db.prepare('UPDATE appointments SET patientId = ?, status = ? WHERE id = ?');
    return stmt.run(patientId, 'booked', id);
};

const updateAppointmentStatus = (id, status) => {
    const stmt = db.prepare('UPDATE appointments SET status = ? WHERE id = ?');
    return stmt.run(status, id);
};

const getDoctorAppointments = (doctorId) => {
    const stmt = db.prepare('SELECT * FROM appointments WHERE doctorId = ?');
    return stmt.all(doctorId);
};

const getPatientAppointments = (patientId) => {
    const stmt = db.prepare('SELECT * FROM appointments WHERE patientId = ?');
    return stmt.all(patientId);
};

const getAvailableAppointments = () => {
    try {
        const stmt = db.prepare('SELECT * FROM appointments WHERE status = ?');
        const result = stmt.all('available');
        return result;
    } catch (error) {
        console.error('Error in getAvailableAppointments:', error);
        throw error;
    }
};

const getPendingAppointments = (doctorId) => {
    const stmt = db.prepare('SELECT * FROM appointments WHERE doctorId = ? AND status = ?');
    return stmt.all(doctorId, "booked");
};

const deleteInvalidAppointments = () => {
    const stmt = db.prepare('DELETE FROM appointments WHERE date = ?');
    return stmt.run("");
};

const getApprovedAppointmentsForDoctor = (doctorId) => {
    const stmt = db.prepare('SELECT * FROM appointments WHERE status = ? AND doctorId = ?');
    return stmt.all('approved', doctorId);
};

const getApprovedAppointmentsForPatient = (patientId) => {
    const stmt = db.prepare('SELECT * FROM appointments WHERE status = ? AND patientId = ?');
    return stmt.all('approved', patientId);
};
module.exports = {
    createAppointmentTable,
    insertAppointment,
    bookAppointment,
    updateAppointmentStatus,
    getDoctorAppointments,
    getPatientAppointments,
    getAvailableAppointments,
    getPendingAppointments,
    deleteInvalidAppointments,
    getApprovedAppointmentsForDoctor,
    getApprovedAppointmentsForPatient
};
