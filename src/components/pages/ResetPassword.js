import React, { useState } from 'react';
import Footer from '../Footer';
import './ResetPassword.css';
import { Link, useHistory } from 'react-router-dom';
import videoFile from '../../images/video-4.mp4';
import axios from 'axios';

function ResetPassword(props) {
  const [code, setCode] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  const handleMailChange = (e) => {
    setMail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConPasswordChange = (e) => {
    setConPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    if (password !== conPassword) {
      alert("Wrong Password");
      return
  }
  console.log(password)
  var qs = require('qs');
  var data = qs.stringify({
      'email': `${mail}`,
      'code': `${code}`,
      'password': `${password}`
  });
  console.log(data)
  var config = {
    method: 'post',
    url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'resetPassword',
    data : data
};
  axios(config)
    .then(function (response) {
      console.log(response.status)
      history.push('/login');
      window.location.reload();
    })
    .catch((error) => {
      alert(error)
  })
  }
  return (
    <>
      <div className='resetpassword' id='resetpassword'>
        <div className="container">
          <h2>New Password</h2>
          <span className='line'></span>
            <div className='content'>
              <h1>Please enter your new password</h1>
              <input
                placeholder="Mail"
                className="logininput"
                type="email"
                id="email"
                name="email"
                value={mail}
                onChange={handleMailChange}
              />
              <input
                placeholder="Code"
                className="logininput"
                type="text"
                id="code"
                name="code"
                value={code}
                onChange={handleCodeChange}
              />
              <input
                placeholder="Password"
                className="logininput"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <input
                placeholder="ConPassword"
                className="logininput"
                type="password"
                id="conPassword"
                name="conPassword"
                value={conPassword}
                onChange={handleConPasswordChange}
              />
              <button className="loginprimaryButtonStyle" onClick={handleSubmit}>Reset Password</button>
              <Link to='/login'>
                <button className="loginsecondaryButtonStyle">Back To login Page</button>
              </Link>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;
