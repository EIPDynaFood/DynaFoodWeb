import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import img1 from '../images/logo_frame.png'
import translate from './../Translation/Footer.json'

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>{translate["AboutUs"][localStorage.getItem("lang")]}</h2>
            <Link to='/'>{translate["Works"][localStorage.getItem("lang")]}</Link>
            <Link to='/'>{translate["Testimonials"][localStorage.getItem("lang")]}</Link>
            <Link to='/'>{translate["Service"][localStorage.getItem("lang")]}</Link>
          </div>
          <div class='footer-link-items'>
            <h2>{translate["ContactUs"][localStorage.getItem("lang")]}</h2>
            <Link to='/contact'>{translate["Contact"][localStorage.getItem("lang")]}</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>{translate["SocialMedia"][localStorage.getItem("lang")]}</h2>
            <Link to='/'>{translate["Instagram"][localStorage.getItem("lang")]}</Link>
            <Link to='/'>{translate["Facebook"][localStorage.getItem("lang")]}</Link>
            <Link to='/'>{translate["Youtube"][localStorage.getItem("lang")]}</Link>
            <Link to='/'>{translate["Twitter"][localStorage.getItem("lang")]}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

//subscription
/*
<section className='footer-subscription'>
<p className='footer-subscription-heading'>
  Join our newsletter to receive more updates about DynaFood
</p>
<p className='footer-subscription-text'>
  You can unsubscribe at any time.
</p>
<div className='input-areas'>
  <form>
    <input
      className='footer-input'
      name='email'
      type='email'
      placeholder='Your Email'
    />
    <Button buttonStyle='btn--outline'>Subscribe</Button>
  </form>
</div>
</section>
*/
//social media
/*<section class='social-media'>
        <div class='social-media-wrap'>
          <img src={img1} class="logo-small" alt="logo_frame"/>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>*/