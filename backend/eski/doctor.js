// routes/doctor.js
const express = require('express');
const { registerDoctor, deleteDoctor } = require('../controllers/doctorController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, admin, registerDoctor);
router.delete('/:id', protect, admin, deleteDoctor);

module.exports = router;
