const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true }, // Changed from name to fullName for clarity
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Added password field
    homeAddress: { type: String, required: true }, // Added homeAddress field
    company: { type: String, required: true } // Added company field
});

module.exports = mongoose.model('User', UserSchema);
