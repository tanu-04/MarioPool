import React, { useState } from 'react';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('overview');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li
            className={activeSection === 'overview' ? 'active' : ''}
            onClick={() => handleSectionChange('overview')}
          >
            Overview
          </li>
          <li
            className={activeSection === 'findRides' ? 'active' : ''}
            onClick={() => handleSectionChange('findRides')}
          >
            Find Rides
          </li>
          <li
            className={activeSection === 'offerRides' ? 'active' : ''}
            onClick={() => handleSectionChange('offerRides')}
          >
            Offer Rides
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activeSection === 'overview' && (
          <div className="section">
            <h2>Overview</h2>
            <p>Welcome to your dashboard! Here you can see your upcoming rides, ride matches, and some stats.</p>
            <div className="stats">
              <p>Rides Found: 3</p>
              <p>Upcoming Rides: 2</p>
              <p>CO2 Saved: 14.5 kg</p>
            </div>
          </div>
        )}

        {activeSection === 'findRides' && (
          <div className="section">
            <h2>Find Rides</h2>
            <p>Search for rides by entering your current location, destination, and pickup time below.</p>
            {/* Modified Fields for "Find Rides" */}
            <input type="text" placeholder="Enter current location" />
            <input type="text" placeholder="Enter destination location" />
            <input type="time" placeholder="Enter pickup time" />
            <button>Search Rides</button>
            <div className="ride-list">
              <p>Ride 1: John Doe, 8 AM, Route: A to B</p>
              <p>Ride 2: Jane Smith, 9 AM, Route: C to D</p>
            </div>
          </div>
        )}

        {activeSection === 'offerRides' && (
          <div className="section">
            <h2>Offer a Ride</h2>
            <p>Fill in the details of your ride below to offer a ride to others.</p>
            <form>
              <input type="date" placeholder="Date" />
              <input type="time" placeholder="Time" />
              <input type="text" placeholder="Route" />
              <button>Offer Ride</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

