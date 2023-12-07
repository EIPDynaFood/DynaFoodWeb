import React, { useState } from 'react';
import Footer from '../Footer';
import './ResetCode.css';
import { Link, useHistory } from 'react-router-dom';
import videoFile from '../../images/video-4.mp4';
import axios from 'axios';

function ResetCode(props) {
  const [code, setCode] = useState('');
  const [mail, setMail] = useState('');
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handleSubmit = (e) => {
  var qs = require('qs');
  var data = qs.stringify({
      'email': `${mail}`,
      'code': `${code}`,
  });
  var config = {
    method: 'post',
    url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'verifyCode',
    data : data
};
  axios(config)
    .then(function (response) {
      console.log(response.status)
      history.push('/resetPassword');
      window.location.reload();
    })
    .catch((error) => {
      alert(error)
  })
  }
  return (
    <>
      <div className='resetcode' id='resetcode'>
        <div className="container">
          <h2>Email Token</h2>
          <span className='line'></span>
            <div className='content'>
              <h1>if your email exist than you received a code, please write it down</h1>
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
              <button className="loginprimaryButtonStyle" onClick={handleSubmit}>Reset Password</button>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetCode;