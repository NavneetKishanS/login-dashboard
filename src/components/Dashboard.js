import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Welcome, {username}!</h2>
        <p>This is your dashboard.</p>
      </div>
    </div>
  );
};

export default Dashboard;
