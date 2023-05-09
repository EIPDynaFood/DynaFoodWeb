import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { IntlProvider, FormattedMessage } from 'react-intl';
import './Navbar.css';
import img1 from '../images/logo_frame.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const [locale, setLocale] = useState('en');
  const handleChange = (e) => {
    setLocale(e.target.value);
  }

  const message = {
    en: {
      DynaFood: '_EN   ',
      Home: 'Home',
      Apps: 'Apps',
      Team: 'Team',
      Contact: 'Contact Us',
      Download: 'Download',
    },
    fr : {
      DynaFood: '_FR   ',
      Home: 'Accueil',
      Apps: 'Application',
      Team: 'La team',
      Contact: 'Nous contactez',
      Download: 'Telecharger',
    },
    de : {
      DynaFood: '_DE   ',
      Home: 'Willkommen',
      Apps: 'Anwendung',
      Team: 'Der team',
      Contact: 'Begleiten Sie uns',
      Download: 'Unterladen',
    },
  };

  return (
    <>

     <IntlProvider locale={locale} messages={message[locale]}>
      <nav className='navbar'>

        <div className='navbar-container'>
          <img src={img1} class="logo-small" alt="logo_frame"/>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <FormattedMessage id="DynaFood"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' params={{ lang: "eng" }} className='nav-links' onClick={closeMobileMenu}>
                <FormattedMessage id="Home"/>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <FormattedMessage id="Apps"/>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <FormattedMessage id="Team"/>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <FormattedMessage id="Contact"/>
              </Link>
            </li>
            <li>
              <Link
                to='/download'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                <FormattedMessage id="Download"/>
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'><FormattedMessage id="Download"/></Button>}
        </div>
        <select onChange={handleChange} defaultValue={locale}>
        {['en', 'fr','de'].map((x) => (
          <option key={x}>{x}</option>
        ))}
        </select>
      </nav>
      </IntlProvider>
    </>
  );
}

//<img src='logo_frame_invisible.png'/>
export default Navbar;
