import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/newimg2.png';
import img2 from '../images/newimg1.jpg';
import img3 from '../images/newimg4.png';
import img4 from '../images/alert.png';
import img5 from '../images/detail.png';
import img6 from '../images/history.png';
import img7 from '../images/login.png';
import img8 from '../images/reset.png';
import img9 from '../images/oreo.png';


function Cards() {
  return (
    <div className='cards'>
      <h2>Discover DynaFood's Powerful Features</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Personalize your allergen preferences easily by changing settings.'
              label='settings'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Scan your favorite products effortlessly using our intuitive scanner.'
              label='scanner'
              path='/services'
            />
            <CardItem
              src={img1}
              text='Access detailed information about each scanned product, including ingredients and nutritional facts.'
              label='information'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
);
}

export default Cards;

/*
          <ul className='cards__items'>
            <CardItem
              src={img4}
              text='Receive instant alerts in case of allergen detection in products.'
              label='alert'
              path='/services'
            />
            <CardItem
              src={img6}
              text='Track your favorite products, view your history, and manage more within your account.'
              label='history'
              path='/services'
            />
            <CardItem
                src={img7}
                text='Create a secure account to save preferences and scanned data for a personalized experience.'
                label='login'
                path='/services'
              />
              <CardItem
                src={img8}
                text='Reset your account password easily if its forgotten or lost.'
                label='reset'
                path='/services'
              />
              <CardItem
                src={img9}
                text='Explore a vast database of supermarket products, including multilingual nutritional information.'
                label='product'
                path='/services'
              />
            </ul>*/