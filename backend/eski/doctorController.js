// controllers/doctorController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerDoctor = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = User.findUserByEmail(email);
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newDoctor = User.insertUser(name, email, hashedPassword, 'doctor');

        res.status(201).json({
            id: newDoctor.lastInsertRowid,
            name,
            email,
            role: 'doctor',
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteDoctor = (req, res) => {
    const { id } = req.params;

    try {
        User.deleteUserById(id);
        res.json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
