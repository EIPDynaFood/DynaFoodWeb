import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import img1 from '../images/logo_frame.png';
import translate from './../Translation/Footer.json';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';

function Footer() {
  const storedToken = localStorage.getItem('token');
  const storedLang = localStorage.getItem('lang');
  const location = useLocation();
  const currentPathname = location.pathname;
  const history = useHistory();
  const handleTest = () => {
    const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ?");
    if (confirmed) {
      const config = {
        method: 'delete',
        url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'user',
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        }
      };
      axios(config)
        .then(function (response) {
          localStorage.removeItem('token');
          localStorage.removeItem('refresh_token');
          history.push('/');
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{translate["AboutUs"][localStorage.getItem("lang")]}</h2>
            <Link to='/services'>{translate["Works"][localStorage.getItem("lang")]}</Link>
            <Link to='/team'>{translate["Team"][localStorage.getItem("lang")]}</Link>
          </div>
          <div className='footer-link-items'>
            <h2>{translate["ContactUs"][localStorage.getItem("lang")]}</h2>
            <Link to='/contact'>{translate["Contact"][localStorage.getItem("lang")]}</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>{translate["SocialMedia"][localStorage.getItem("lang")]}</h2>
            <Link to='/'>{translate["Linkedin"][localStorage.getItem("lang")]}</Link>
            {storedToken ? (currentPathname == "/profil" ? (
              <Link to='/profil' onClick={handleTest}>Delete Account</Link>
            ) : null) : null}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DynaFood. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;



/* <Link to='/services'>{translate["Service"][localStorage.getItem("lang")]}</Link>
           <Link to='/'>{translate["Facebook"][localStorage.getItem("lang")]}</Link>
            <Link to='/'>{translate["Youtube"][localStorage.getItem("lang")]}</Link>
            <Link to='/'>{translate["Twitter"][localStorage.getItem("lang")]}</Link>*/
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