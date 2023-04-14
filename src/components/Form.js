import React from "react";
import './Form.css';
import { useState } from "react";

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
                <h1>Contact <span className="span">Here</span></h1>
                <input type="text" name="name" className="input" id="" onChange={handleChange} value={data.name} placeholder="Enter name"/>
                <input type="email" name="email" className="input" id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com"/>
                <input type="phone" name="phone" className="input" id="" onChange={handleChange} value={data.phone} placeholder="+69 ..."/>
                <textarea name="message" id="" cols="30" className="textarea" rows="10" onChange={handleChange} value={data.message} placeholder="type here..."/>
                <button type='submit' className="button" >send</button>
                <p>{data.name},{data.email},{data.phone},{data.message}</p>
            </form>
        </div>
    )
}

export default Form