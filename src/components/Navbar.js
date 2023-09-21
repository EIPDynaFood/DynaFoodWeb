import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { IntlProvider, FormattedMessage } from 'react-intl';
import './Navbar.css';
import Select from 'react-select';
import img1 from '../images/logo_frame.png';
import enFlag from '../images/us.png';
import frFlag from '../images/fr.png';
import deFlag from '../images/de.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const storedToken = localStorage.getItem('token');

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
    alert(localStorage.getItem('token'))
  }, []);

  window.addEventListener('resize', showButton);

  const [locale, setLocale] = useState('en');
  const handleChange = (e) => {
    setLocale(e.target.value);
  }

  const handleDownload = () => {
    const url = 'https://expo.dev/artifacts/eas/5GyTkDfWxE479nuKdCFDU9.apk';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dyna.apk';
    document.body.appendChild(link);
    link.click();
  };

  const CustomOption = ({ innerProps, label, data }) => (
    <div {...innerProps}>
      <img src={data.icon} alt={label} width="24" height="24" />
      <span>{label}</span>
    </div>
  );

  const languageOptions = [
    {
      value: 'en',
      label: '  English',
      icon: enFlag, // Import or provide the image URL
    },
    {
      value: 'fr',
      label: '  French',
      icon: frFlag,
    },
    {
      value: 'de',
      label: ' German',
      icon: deFlag,
    },
  ];

  const message = {
    en: {
      DynaFood: '_EN   ',
      Home: 'Home',
      Apps: 'Apps',
      Team: 'Team',
      Contact: 'Contact Us',
      Download: 'Download',
      Login: 'Login',
    },
    fr : {
      DynaFood: '_FR   ',
      Home: 'Accueil',
      Apps: 'Application',
      Team: 'La team',
      Contact: 'Nous contactez',
      Download: 'Telecharger',
      Login: 'Connecter',
    },
    de : {
      DynaFood: '_DE   ',
      Home: 'Willkommen',
      Apps: 'Anwendung',
      Team: 'Der team',
      Contact: 'Begleiten Sie uns',
      Download: 'Unterladen',
      Login: 'Login',
    },
  };

  return (
    <>

     <IntlProvider locale={locale} messages={message[locale]}>
      <nav className='navbar'>

        <div className='navbar-container'>
          <img src={img1} class="logo-small" alt="logo_frame"/>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
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
            <li className='nav-item'>
            {storedToken ? (
    <Link to='/profil' className='nav-links' onClick={closeMobileMenu}>
      <FormattedMessage id="Profil"/>
    </Link>
  ) : (
    <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
      <FormattedMessage id="Login"/>
    </Link>
  )}
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={handleDownload}><FormattedMessage id="Download"/></Button>}
        </div>
        <Select
          options={languageOptions}
          defaultValue={languageOptions[0]} // Set the initial selected option
          onChange={(selectedOption) => setLocale(selectedOption.value)} // Handle change event
          styles={{
            control: (provided) => ({
              ...provided,
              border: '1px solid #ccc',
            }),
            option: (provided) => ({
              ...provided,
              display: 'flex',
              alignItems: 'center',
            }),
            singleValue: (provided) => ({
              ...provided,
              display: 'flex',
              alignItems: 'center',
            }),
          }}
          components={{
            Option: CustomOption, // Define a custom option component
          }}
        />
      </nav>
      </IntlProvider>
    </>
  );
}

//<img src='logo_frame_invisible.png'/>
export default Navbar;
