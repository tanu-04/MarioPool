import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();  // This hook allows navigation between routes.

  const handleFindRideClick = () => {
    navigate('/dashboard');  // Navigates to the Dashboard page.
  };

  const handleStartCarpoolingClick = () => {
    navigate('/dashboard');  // You can change this if needed.
  };

  return (
    <section className="hero">
      <h2>Join the Carpool Revolution!</h2>
      <p>Save the planet, save money, and make your commute better with MarioPool.</p>
      <div className="cta-buttons">
        <button onClick={handleFindRideClick}>Find a Ride</button>
        <button onClick={handleStartCarpoolingClick}>Start Carpooling</button>
      </div>
    </section>
  );
};

export default HeroSection;

