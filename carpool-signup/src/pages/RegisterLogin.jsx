import React, { useState } from 'react';
import axios from 'axios';

const RegisterLogin = () => {
  // State to store the form data
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    homeAddress: '',
    company: '',
    termsAgreed: false,
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission for registration
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users', registerData); // Ensure this matches your API
      console.log('User registered successfully:', response.data);
      alert('Registration successful!');
      // Optionally reset form after successful registration
      setRegisterData({
        fullName: '',
        email: '',
        password: '',
        homeAddress: '',
        company: '',
        termsAgreed: false,
      });
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {/* Registration Form */}
      <form className="register-form" onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={registerData.fullName}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registerData.password}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="homeAddress"
          placeholder="Home Address"
          value={registerData.homeAddress}
          onChange={handleInputChange}
          required
        />
        <select
          name="company"
          value={registerData.company}
          onChange={handleInputChange}
          required
        >
          <option value="">Choose your company</option>
          <option value="Company A">Company A</option>
          <option value="Company B">Company B</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="termsAgreed"
            checked={registerData.termsAgreed}
            onChange={handleInputChange}
            required
          />{' '}
          I agree to the terms and conditions
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterLogin;
