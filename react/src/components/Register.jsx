import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const googleLogin = async() => {
    console.log("logging in with google")
    window.location.href = 'http://localhost:5050/login/google';
  };

  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5050/register', {
        name,
        email,
        password
      });
      navigate('/home'); // Navigate to home page
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form" onSubmit={handleRegister}>
        
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Enter Name ...' />
     
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Enter Email ...' />
     
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Enter Password ...' />
        <button type="submit">Register</button>
      </form>
      <div className="google-login">
        <p>Or sign up with </p>
        <button onClick={googleLogin}>Continue with Google</button>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default Register;
