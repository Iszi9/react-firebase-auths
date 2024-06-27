// src/Login.js
import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Here we are not actually using firstName and lastName for Firebase authentication
      // You may want to save these details in the Firestore database or use them in some other way
      await auth.signInWithEmailAndPassword(email, 'defaultPassword'); // Use a default password or other logic
      navigate('/dashboard'); // Redirect to a protected route after login
    } catch (error) {
      console.error('Error logging in with password and email', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
