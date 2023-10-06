
import React from 'react'
import img1 from '../images/screen1.png'
import img2 from '../images/screen2.png'
import img3 from '../images/screen3.png'
import img4 from '../images/screen4.png'
import './About.css'
import translate from './../Translation/About.json'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={img1} alt='' />
                <div className='col-2'>
                    <h2>{translate["Titre1"][localStorage.getItem("lang")]}</h2>
                    <span className='line'></span>
                    <p>{translate["Text1"][localStorage.getItem("lang")]}</p>
                    <p>{translate["Phase1"][localStorage.getItem("lang")]}</p>
                </div>
            </div>
            <div className='container'>

                <div className='col-2'>
                    <h2>{translate["Titre2"][localStorage.getItem("lang")]}</h2>
                    <span className='line'></span>
                    <p>{translate["Text2"][localStorage.getItem("lang")]}</p>
                    <p>{translate["Phase2"][localStorage.getItem("lang")]}</p>
                </div>
                <img src={img2} alt='' />
            </div>
            <div className='container'>
                <img src={img3} alt='' />
                <div className='col-2'>
                    <h2>{translate["Titre3"][localStorage.getItem("lang")]}</h2>
                    <span className='line'></span>
                    <p>{translate["Text3"][localStorage.getItem("lang")]}</p>
                    <p>{translate["Phase3"][localStorage.getItem("lang")]}</p>
                </div>
            </div>
            <div className='container'>

                <div className='col-2'>
                    <h2>{translate["Titre4"][localStorage.getItem("lang")]}</h2>
                    <span className='line'></span>
                    <p>{translate["Text4"][localStorage.getItem("lang")]}</p>
                    <p>{translate["Phase4"][localStorage.getItem("lang")]}</p>
                </div>
                <img src={img4} alt='' />
            </div>
        </div>
    )
}

export default About
