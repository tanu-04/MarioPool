const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
// const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// User Schema and Model
const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true }, // Changed from name to fullName for clarity
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Added password field
  homeAddress: { type: String, required: true }, // Added homeAddress field
  company: { type: String, required: true }, // Added company field
});

const User = mongoose.model("User", UserSchema); // Create User model

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Sample route
app.get("/", (req, res) => {
  //   res.redirect("http://localhost:3000"); // Replace with your frontend URL
  res.send("/");
});

// Signup route
app.post("/signup", async (req, res) => {
  const { fullName, email, password, homeAddress, company } = req.body; // Capture form fields
  try {
    const newUser = new User({
      fullName,
      email,
      password,
      homeAddress,
      company,
    });
    await newUser.save();
    res.status(201).json(newUser); // Respond with the created user
  } catch (error) {
    // Improved error handling
    if (error.code === 11000) {
      // MongoDB unique constraint error
      return res.status(400).json({ message: "Email already exists." });
    }
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
