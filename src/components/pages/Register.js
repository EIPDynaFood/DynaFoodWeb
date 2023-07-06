import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Register.css';

function Register(props) {
  return (
    <>
      <div className="container">
        <img src={require('../../images/newmeow5.png')} alt="Logo" className="logo" />
        <input
          placeholder="Full Name"
          className="input"
          type="text"
        />
        <input
          placeholder="Email"
          className="input"
          type="email"
        />
        <input
          placeholder="Password"
          className="input"
          type="password"
        />
        <input
          placeholder="Confirm Password"
          className="input"
          type="password"
        />
        <button className="primaryButtonStyle">Register</button>
        <p className="registerText">Already have an account? <a href="/login">Login here</a></p>
      </div>
      <Footer />
    </>
  );
}

export default Register;
