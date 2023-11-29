import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Select from 'react-select';
import img1 from '../images/logo_frame_invisible.png';
import enFlag from '../images/us.png';
import frFlag from '../images/fr.png';
import deFlag from '../images/de.png';
import itFlag from '../images/it.png';
import esFlag from '../images/es.png';
import prFlag from '../images/pr.png';
import translate from './../Translation/Navbar.json'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const storedToken = localStorage.getItem('token');
  const storedLang = localStorage.getItem('lang');
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false)
    window.scrollTo(0, 0);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    if (localStorage.getItem("lang") == null)
    {
        localStorage.setItem("lang","en");
    }
    setLocale(localStorage.getItem("lang"))
    console.log(localStorage.getItem("lang"))
  }, []);

  window.addEventListener('resize', showButton);

  const [locale, setLocale] = useState('en');

  const handleChange = (e) => {
    localStorage.setItem("lang",e)
    setLocale(e)
    window.location.reload()
  }

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
    {
      value: 'it',
      label: '  Italian',
      icon: itFlag, // Import or provide the image URL
    },
    {
      value: 'pt',
      label: '  Portuguese',
      icon: prFlag,
    },
    {
      value: 'es',
      label: ' Spanish',
      icon: esFlag,
    },
  ];

const defaultLanguageOption = languageOptions.find(option => option.value === storedLang);
  return (
    <>

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
              {translate["Home"][localStorage.getItem("lang")]}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {translate["Apps"][localStorage.getItem("lang")]}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {translate["Team"][localStorage.getItem("lang")]}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {translate["Contact"][localStorage.getItem("lang")]}
              </Link>
            </li>
            <li className='nav-item'>
            {storedToken ? (
    <Link to='/profil' className='nav-links' onClick={closeMobileMenu}>
      {translate["Profil"][localStorage.getItem("lang")]}
    </Link>
  ) : (
    <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
      {translate["Login"][localStorage.getItem("lang")]}
    </Link>
  )}
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>{translate["Download"][localStorage.getItem("lang")]}</Button>}
        </div>
        <Select
          options={languageOptions}
          defaultValue={defaultLanguageOption} // Set the initial selected option
          onChange={(selectedOption) => handleChange(selectedOption.value)}
          styles={{
            control: (provided) => ({
              ...provided,
              border: '1px solid #ccc',
              width: '140px',
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
    </>
  );
}

export default Navbar;
