// controllers/appointmentController.js
const Appointment = require('../models/Appointment');

exports.createAppointment = (req, res) => {
    const { date, time } = req.body;
    const { id: doctorId } = req.user; // Kimlik doğrulanmış doktorun ID'sini alıyoruz

    try {
        const newAppointment = Appointment.insertAppointment(date, time, doctorId);
        res.status(201).json({ message: 'Appointment created successfully', appointmentId: newAppointment.lastInsertRowid });
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.bookAppointment = (req, res) => {
    const { id } = req.params;
    const { id: patientId } = req.user;

    try {
        Appointment.bookAppointment(id, patientId);
        res.json({ message: 'Appointment booked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateAppointmentStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        Appointment.updateAppointmentStatus(id, status);
        res.json({ message: 'Appointment status updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getDoctorAppointments = (req, res) => {
    const { id: doctorId } = req.user;

    try {
        const appointments = Appointment.getDoctorAppointments(doctorId);
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getPatientAppointments = (req, res) => {
    const { id: patientId } = req.user;

    try {
        const appointments = Appointment.getPatientAppointments(patientId);
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getAvailableAppointments = (req, res) => {
    console.log('getAvailableAppointments called');
    try {
        const appointments = Appointment.getAvailableAppointments();
        //console.log('Available appointments:', appointments);
        res.json(appointments);
    } catch (error) {
        console.error('Error fetching available appointments:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getPendingAppointments = (req, res) => {
    const { id: doctorId } = req.user;

    try {
        const appointments = Appointment.getPendingAppointments(doctorId);
        //console.log('Booked appointments:', appointments);
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteInvalidAppointments = (req, res) => {
    try {
        const info = Appointment.deleteInvalidAppointments();
        //console.log('deleteInvalidAppointments info:', info);
        res.status(200).json({ message: `${info.changes} invalid appointments deleted.` });
    } catch (error) {
        console.error('Error in deleteInvalidAppointments:', error);
        res.status(500).json({ message: 'Error deleting invalid appointments', error });
    }
};

exports.getApprovedAppointments = (req, res) => {
    try {
        const { role, id } = req.user;
        let appointments = [];
        if (role === 'doctor') {
            appointments = Appointment.getApprovedAppointmentsForDoctor(id);
        } else if (role === 'patient') {
            appointments = Appointment.getApprovedAppointmentsForPatient(id);
        }
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};