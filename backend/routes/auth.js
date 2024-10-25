// routes/auth.js
const express = require('express');
const { registerUser, loginUser, updateUser } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/update/:id', protect, updateUser);

module.exports = router;
