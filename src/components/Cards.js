import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/information.png';
import img2 from '../images/scanner.png';
import img3 from '../images/settings.png';
import img4 from '../images/alert.png';
import img5 from '../images/detail.png';
import img6 from '../images/history.png';
import img7 from '../images/login.png';
import img8 from '../images/reset.png';
import img9 from '../images/oreo.png';






function Cards() {
  const message = {
    en: {
      DynaFood: 'DynaFood descriptive of features and what it can do',
      Allergens: 'Change all your settings to the desired allergens',
      Fav: 'Scan all your fav products',
      Info: 'Get detailed information about each scanned product',
      Change: 'Change all your settings to the desired allergens',
    },
    fr: {
      DynaFood: 'DynaFood descriptif des fonctionnalités et de ce quil peut faire',
      Allergens: 'Modifiez tous vos réglages sur les allergènes souhaités',
      Fav: 'Scannez tous vos produits préférés',
      Info: 'Obtenir des informations détaillées sur chaque produit scanné',
      Change: 'Modifier tous vos paramètres aux allergènes souhaités',
    },
    de: {
      DynaFood: 'DynaFood beschreibt die Funktionen und was es kann',
      Allergens: 'Alle Ihre Einstellungen auf die gewünschten Allergene ändern',
      Fav: 'Alle Ihre Lieblingsprodukte scannen',
      Info: 'Detaillierte Informationen zu jedem gescannten Produkt erhalten',
      Change: 'Alle Ihre Einstellungen auf die gewünschten Allergene ändern',
    },
  };
  return (
    <div className='cards'>
      <h1>DynaFood descriptive of features and what it can do</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Change all your settings to the desired allergens'
              label='settings'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Scan all your fav products'
              label='scanner'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Get detailed information about each scanned product'
              label='information'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Get allerted in case of an allergen detection'
              label='alert'
              path='/services'
            />
            <CardItem
              src={img6}
              text='Keep track of all your favs, and much more'
              label='history'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={img7}
                text='Creat an account and save all your information'
                label='login'
                path='/services'
              />
              <CardItem
                src={img8}
                text='Reset your password in case of lost'
                label='reset'
                path='/services'
              />
              <CardItem
                src={img9}
                text='Find every product in supermarket and its nutritional value in every language'
                label='product'
                path='/services'
              />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
