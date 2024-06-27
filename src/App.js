// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './SignUp';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <nav>
        <ul style={{ textAlign: 'center', backgroundColor: 'purple', padding: '10px', color: 'white', fontStyle: 'italic' }}>
          <li style={{ display: 'inline', margin: '0 10px' }}>
            <Link to="/" style={{ color: 'white' }}>SignUp</Link>
          </li>
          <li style={{ display: 'inline', margin: '0 10px' }}>
            <Link to="/home" style={{ color: 'white' }}>Home</Link>
          </li>
          <li style={{ display: 'inline', margin: '0 10px' }}>
            <Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<h1 style={{ textAlign: 'center', color: 'purple', fontStyle: 'italic' }}>Home Page</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
