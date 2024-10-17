const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/signup', async (req, res) => {
    const { fullName, email, password, homeAddress, company } = req.body;  // Capture form fields
    try {
        const newUser = new User({ fullName, email, password, homeAddress, company });
        await newUser.save();
        res.status(201).json(newUser);  // Respond with the created user
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
