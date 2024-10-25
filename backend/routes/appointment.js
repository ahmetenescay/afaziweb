// routes/appointment.js
const express = require('express');
const {
    createAppointment,
    bookAppointment,
    updateAppointmentStatus,
    getDoctorAppointments,
    getPatientAppointments,
    getAvailableAppointments,
    getPendingAppointments,
    deleteInvalidAppointments,
    getApprovedAppointments
} = require('../controllers/appointmentController');

const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createAppointment); // Doktorlar randevu oluşturur
router.put('/book/:id', protect, bookAppointment); // Hastalar randevu seçer
router.put('/status/:id', protect, updateAppointmentStatus); // Randevu durumu güncelle
router.get('/doctor', protect, getDoctorAppointments); // Doktor randevuları görüntüler
router.get('/patient', protect, getPatientAppointments); // Hasta randevuları görüntüler
router.get('/available', protect, getAvailableAppointments); // Hastalar açık randevuları görüntüler
router.get('/pending', protect, getPendingAppointments); // Doktor pending randevuları görüntüler
router.delete('/deleteInvalid', protect, deleteInvalidAppointments);// DoktorID ve patientID si null olan randevuları siler
router.get('/approved', protect, getApprovedAppointments); // Onaylanmış randevuları getir

module.exports = router;
