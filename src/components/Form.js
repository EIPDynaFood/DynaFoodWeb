import React from "react";
import './Form.css';
import { useState } from "react";
import axios from 'axios';

import translate from './../Translation/Form.json'
const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
      };

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

      const handlePhoneChange = (e) => {
        setPhone(e.target.value);
      };

      const handleMessageChange = (e) => {
        setMessage(e.target.value);
      };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!email || !message) {
            alert("Email and Message are required fields.");
            return;
        }
        var qs = require('qs');
            var data = qs.stringify({
                'email': `${email}`,
                'content': `${message}`
            });
            var config = {
                method: 'post',
                url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/contactForm',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data : data
            };
            axios(config)
            .then(function (response) {
            alert("Your form has been send !")
    })
    .catch((error) => {
      alert(error.response.data.Error)
  })
    }
    return (
        <div className="body">
            <form method='post' onSubmit={handleSubmit} className="form">
                <h1><span className="span">{translate["ContactHere"][localStorage.getItem("lang")]}</span></h1>
                <input type="text" name="name" className="input" id="" onChange={handleNameChange} value={name} placeholder={translate["Name"][localStorage.getItem("lang")]}/>
                <input type="email" name="email" className="input" id="" onChange={handleEmailChange} value={email} placeholder="example@gmail.com"/>
                <input type="phone" name="phone" className="input" id="" onChange={handlePhoneChange} value={phone} placeholder={translate["Tel"][localStorage.getItem("lang")]}/>
                <textarea name="message" id="" cols="30" className="textarea" rows="10" onChange={handleMessageChange} value={message} placeholder={translate["Type"][localStorage.getItem("lang")]}/>
                <button type='submit' className="button" >{translate["Send"][localStorage.getItem("lang")]}</button>
            </form>
        </div>
    )
}

export default Form

//<p>{data.name},{data.email},{data.phone},{data.message}</p>