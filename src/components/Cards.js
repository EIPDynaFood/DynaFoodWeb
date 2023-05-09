import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/information.png';
import img2 from '../images/scanner.png';
import img3 from '../images/settings.png';

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
          </ul>
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
        </div>
      </div>
    </div>
  );
}

export default Cards;
