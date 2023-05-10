
import React from 'react'
import img1 from '../images/screen1.png'
import img2 from '../images/screen2.png'
import img3 from '../images/screen3.png'
import img4 from '../images/screen4.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={img1} alt='' />
                <div className='col-2'>
                    <h2>How it became a project</h2>
                    <span className='line'></span>
                    <p>DynaFood is a mobile application that allows users to track and evaluate the
                        environmental impact and nutritional value of their groceries. The application
                        can be configured based on the user’s wishes and dietary preferences, which 
                        will help everybody find the products that match their lifestyle.
                        After having a moonshot at our Tek3, we found out that most people struggle to
                        keep track of what they eat, calories and vice versa, and we decided to make
                        this application to track everything from allergens to favorites, in any language.</p>
                    <p>Phase 1: The Idea (Nov. 2021)</p>
                </div>
            </div>
            <div className='container'>

                <div className='col-2'>
                    <h2>Our Journey through Figma & Moonshot</h2>
                    <span className='line'></span>
                    <p>Figma phase was quite tricky, as we had no experience with any UI/UX before this.
                        We luckily got help from professional in designing our application and all pages,
                        using that knownledge we implamented our journey on expo, react native and from there
                        we added more features to try to reach ou dream goal.
                    </p>
                    <p>Phase 2: First technical implementation (Dec. 2021)</p>
                </div>
                <img src={img2} alt='' />
            </div>
            <div className='container'>
                <img src={img3} alt='' />
                <div className='col-2'>
                    <h2>Our first try on App</h2>
                    <span className='line'></span>
                    <p>DynaFood will be helping you to pick the best groceries depending on your health, special diets.
                       Using our scanner you can scan any item and get multiple information such as:
Special diets: vegetarian, vegan, pescatarian
Allergies: nuts, fruits, etc. (all known food allergies)
Religious restrictions: halal, kosher…
Ecological footprint: "don't care" or "I want to care".
Diets: I want to "reduce", "maintain", "increase" my weight.
Since we must handle sensitive data, our data is well securely saved.</p>
                    <p>Phase 3: (Summer 2022) Basic App</p>
                </div>
            </div>
            <div className='container'>

                <div className='col-2'>
                    <h2>Beta Phase</h2>
                    <span className='line'></span>
                    <p>To make the process of finding the right products easier and faster, we will come up with a scoring system.
                        Based on the user's preferences and needs as well as the quality of the product, we will have an algorithm
                        checking the products and attributing a score to them. This score will be a numerical value between 0.0 and 10.0.
                        If a product contains an ingredient that the user cannot consume at all, the product will be given a score of 0.0
                         Else, depending on how well the product fits the needs of the user, the score will vary up to 10, meaning a perfect fit.
                         For that, we will evaluate the ingredients, nutrition, and ecological licenses. Also, when the user is currently checking a product with a low score,
                        the app will try to recommend similar products with a better score so the user doesn't have to keep searching for long.</p>
                    <p>Phase 4: (May 2023) Beta (Product Information Screenshot, briefly mention algorithm creation)</p>
                </div>
                <img src={img4} alt='' />
            </div>
        </div>
    )
}

export default About
