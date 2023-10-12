import React, { useState } from 'react';
import Footer from '../Footer';
import './Register.css';
import video1 from '../../images/video-4.mp4';
import axios from 'axios';
import {useHistory } from 'react-router-dom';
import translate from './../../Translation/Register.json'

function Register(props) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');
  const userName = "userName"
  const phoneNumber = "00000000"
  const history = useHistory();
 
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    if (password !== Cpassword) {
      alert("Not same password");
      return
  }
    var qs = require('qs');
            var data = qs.stringify({
                'firstName': `${firstname}`,
                'lastName': `${lastname}`,
                'userName': `${userName}`,
                'email': `${email}`,
                'phoneNumber': `${phoneNumber}`,
                'password': `${password}`
            });
            var config = {
                method: 'post',
                url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'signup',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data : data
            };
            axios(config)
            .then(function (response) {
            alert("You received an E-Mail to verify your account.")
            history.push('/validation');
            window.location.reload();
    })
    .catch((error) => {
      alert(error.response.data.Error)
  })
  }
  return (
    <>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <div className="registercontainer">
        <video className='registerVideo' src={video1} autoPlay loop muted />
        <div className="registerContent">
          <img src={require('../../images/logo_frame.png')} alt="Logo" className="registerlogo" />
          <input
            placeholder={translate["FirstName"][localStorage.getItem("lang")]}
            className="registerinput"
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={handleFirstnameChange}
          />
          <input
            placeholder={translate["LastName"][localStorage.getItem("lang")]}
            className="registerinput"
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={handleLastnameChange}
          />
          <input
            placeholder={translate["Email"][localStorage.getItem("lang")]}
            className="registerinput"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            placeholder={translate["Password"][localStorage.getItem("lang")]}
            className="registerinput"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            placeholder={translate["CPassword"][localStorage.getItem("lang")]}
            className="registerinput"
            type="password"
            id="Cpassword"
            name="Cpassword"
            value={Cpassword}
            onChange={handleCPasswordChange}
          />
          <button className="registerprimaryButtonStyle" onClick={handleSubmit}>{translate["Register"][localStorage.getItem("lang")]}</button>
          <p className="registerText">{translate["Account"][localStorage.getItem("lang")]} <a href="/login">{translate["Login"][localStorage.getItem("lang")]}</a></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
