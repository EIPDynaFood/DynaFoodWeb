
import React from 'react'
import img1 from '../images/phase1.png'
import img2 from '../images/phase2.png'
import img3 from '../images/phase3.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={img1} alt='' />
                <div className='col-2'>
                    <h2>How it became a project</h2>
                    <span className='line'></span>
                    <p>blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>Meow.</p>
                </div>
            </div>
            <div className='container'>
                <img src={img2} alt='' />
                <div className='col-2'>
                    <h2>Phase 1</h2>
                    <span className='line'></span>
                    <p>blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>Meow1.</p>
                </div>
            </div>
            <div className='container'>
                <img src={img3} alt='' />
                <div className='col-2'>
                    <h2>Phase 2</h2>
                    <span className='line'></span>
                    <p>blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>Meow2.</p>
                </div>
            </div>
        </div>
    )
}

export default About
