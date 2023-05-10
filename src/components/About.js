
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
                    <p>DynaFood is a mobile application that allows users to track and evaluate the environmental impact and nutritional value of their groceries.
The application can be configured based on the user’s wishes and dietary preferences, which will help everybody find the products that match their lifestyle</p>
                    <p>Phase 1: The Idea (Nov. 2021) (describing the EIP and basic problem/solution)</p>
                </div>
            </div>
            <div className='container'>
                <img src={img2} alt='' />
                <div className='col-2'>
                    <h2>Our Journey through Figma & Moonshot</h2>
                    <span className='line'></span>
                    <p>blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>Phase 2: First technical implementation (Dec. 2021) (black and white figma designs) </p>
                </div>
            </div>
            <div className='container'>
                <img src={img3} alt='' />
                <div className='col-2'>
                    <h2>Our first try on App</h2>
                    <span className='line'></span>
                    <p>blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>Phase 3: (Summer 2022) Basic App (Scanner, History Page, Settings Screenshots)</p>
                </div>
            </div>
            <div className='container'>
                <img src={img3} alt='' />
                <div className='col-2'>
                    <h2>Beta Phase</h2>
                    <span className='line'></span>
                    <p>blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>Phase 4: (May 2023) Beta (Product Information Screenshot, briefly mention algorithm creation)</p>
                </div>
            </div>
        </div>
    )
}

export default About
