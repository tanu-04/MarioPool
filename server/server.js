const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//const userRoutes = require('./routes/userRoutes');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
//app.use('/api/users', userRoutes);
// Connect to MongoDB

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true }, // Changed from name to fullName for clarity
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Added password field
    homeAddress: { type: String, required: true }, // Added homeAddress field
    company: { type: String, required: true } // Added company field
});
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));


// Sample route
//     res.send('Welcome to the MERN Stack API');
// });

// app.get('/', (req, res) => {

//     res.redirect('http://localhost:3000'); // Replace with your frontend URL
//   });
  app.post('/signup', async (req, res) => {
    const { fullName, email, password, homeAddress, company } = req.body;  // Capture form fields
    try {
        const newUser = new User({ fullName, email, password, homeAddress, company });
        await newUser.save();
        res.status(201).json(newUser);  // Respond with the created user
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
//co

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});