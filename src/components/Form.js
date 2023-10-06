import React from "react";
import './Form.css';
import { useState } from "react";

import translate from './../Translation/Form.json'
const Form = () => {
    const [data, setData] = useState({name: "", email: "", phone: "", message: ""})
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(data)
    }
    return (
        <div className="body">
            <form method='post' onSubmit={handleSubmit} className="form">
                <h1><span className="span">{translate["ContactHere"][localStorage.getItem("lang")]}</span></h1>
                <input type="text" name="name" className="input" id="" onChange={handleChange} value={data.name} placeholder={translate["Name"][localStorage.getItem("lang")]}/>
                <input type="email" name="email" className="input" id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com"/>
                <input type="phone" name="phone" className="input" id="" onChange={handleChange} value={data.phone} placeholder={translate["Type"][localStorage.getItem("lang")]}/>
                <textarea name="message" id="" cols="30" className="textarea" rows="10" onChange={handleChange} value={data.message} placeholder={translate["Tel"][localStorage.getItem("lang")]}/>
                <button type='submit' className="button" >{translate["Send"][localStorage.getItem("lang")]}</button>
            </form>
        </div>
    )
}

export default Form

//<p>{data.name},{data.email},{data.phone},{data.message}</p>