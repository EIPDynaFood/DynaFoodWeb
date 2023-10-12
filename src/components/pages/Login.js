import React, { useState } from 'react';
import Footer from '../Footer';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import videoFile from '../../images/video-4.mp4';
import axios from 'axios';
import translate from './../../Translation/Login.json'

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
  const config = {
    method: 'get',
    url:  'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'login?email=' + `${email}` + '&password=' + `${password}`,
    rejectUnauthorized: false,
};
  console.log(email)
  console.log(password)
  axios(config)
    .then(function (response) {
      localStorage.setItem('token', response.data["token"])
      localStorage.setItem('refresh_token', response.data["refresh_token"])
      history.push('/profil');
      window.location.reload();
    })
    .catch((error) => {
      alert(error.response.data.Error)
  
  })
  }
  return (
    <>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <div className="logincontainer">
        <video className='loginVideo' autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div className="loginContent">
          <img src={require('../../images/logo_frame.png')} alt="Logo" className="loginlogo" />
          <input
            placeholder={translate["Email"][localStorage.getItem("lang")]}
            className="logininput"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            placeholder={translate["Password"][localStorage.getItem("lang")]}
            className="logininput"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="loginprimaryButtonStyle" onClick={handleSubmit}>{translate["Login"][localStorage.getItem("lang")]}</button>
          <Link to='/register'>
            <button className="loginsecondaryButtonStyle">{translate["Register"][localStorage.getItem("lang")]}</button>
          </Link>
          <Link to='/sendEmail'>
            <button className="loginsecondaryButtonStyle">Reset Password</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
