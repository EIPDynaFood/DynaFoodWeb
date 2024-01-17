import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import translate from './../../Translation/Profil.json';
import './Profil.css'
import avatar from '../../images/logo_frame.png'
import APIRoute from '../refreshToken';

function premiereLettreEnMajuscule(chaine) {
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

// Utilisez un état local pour suivre la couleur de fond actuelle des boutons
const User = () => {
  // Utilisez un état local pour suivre la couleur de fond actuelle des boutons
  const [veganButtonColor, setVeganButtonColor] = useState();
  const [vegetarienButtonColor, setVegetarienButtonColor] = useState();
  const history = useHistory();
  // Utilisez un état local pour suivre le texte actuel des boutons
  const [veganButtonText, setVeganButtonText] = useState();
  const [vegetarienButtonText, setVegetarienButtonText] = useState();

  // Utilisez un état local pour suivre les éléments ajoutés
  const [elementsAjoutes, setElementsAjoutes] = useState([]);

  // Fonction pour changer la couleur de fond du bouton et le texte
  const changeButtonColorAndText = () => {
    const colors = ["lightgreen", "limegreen", "green"];
    const currentIndex = colors.indexOf(veganButtonColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    const nextColor = colors[nextIndex];
    var value = 0
    // Mettre à jour la couleur du bouton
    setVeganButtonColor(nextColor);
    console.log(nextColor)
    // Mettre à jour le texte en fonction de la couleur
    if (nextColor === "limegreen") {
      setVeganButtonText("Casual");
      value = 1
    } else if (nextColor === "green") {
      setVeganButtonText("Strict");
      value = 2
    } else {
      setVeganButtonText("No");
      value = 0
    }
      var qs = require('qs');
        var data = qs.stringify({
            'alertActivation': `${true}`,
            'restrictionName': 'vegan',
            'strongness': `${value}`,
        });
        console.log(data)
        var config = {
            method: 'patch',
            url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'settings/',
            data : data,
            headers: {
              Authorization: `Bearer `+ localStorage.getItem("token"),
            }
        };
        APIRoute(() => axios(config)
        .then().catch((err) => {
            if (err.response.status === 401)
                throw(err)
        }))

  };
  
  const changeButtonColorAndText2 = () => {
    const colors = ["lightgreen", "limegreen", "green"];
    const currentIndex = colors.indexOf(vegetarienButtonColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    const nextColor = colors[nextIndex];
    var value = 0
    // Mettre à jour la couleur du bouton
    setVegetarienButtonColor(nextColor);
    console.log(currentIndex)
    // Mettre à jour le texte en fonction de la couleur
    if (nextColor === "limegreen") {
      setVegetarienButtonText("Casual");
      value = 1
    } else if (nextColor === "green") {
      setVegetarienButtonText("Strict");
      value = 2
    } else {
      setVegetarienButtonText("No");
      value = 0
    }
      var qs = require('qs');
        var data = qs.stringify({
            'alertActivation': `${true}`,
            'restrictionName': 'vegetarian',
            'strongness': `${value}`,
        });
        var config = {
            method: 'patch',
            url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'settings/',
            data : data,
            headers: {
              Authorization: `Bearer `+ localStorage.getItem("token"),
            }
        };
        APIRoute(() => axios(config)
        .then().catch((err) => {
            if (err.response.status === 401)
                throw(err)
        }))
  };


  useEffect(() => {
    const config = {
        method: 'get',
        url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'settings/',
        headers: {
          Authorization: `Bearer `+ localStorage.getItem("token"),
        }
    };
    APIRoute(() => axios(config)
        .then(function (response) {
          console.log(response.data)
          const valueVeg = parseInt(response.data[0].strongness)
          const valueVeg2 = parseInt(response.data[1].strongness)
          if (valueVeg === 0) {
            setVeganButtonColor("lightgreen");
            setVeganButtonText("No")
          } else if (valueVeg === 1) {
            setVeganButtonColor("limegreen");
            setVeganButtonText("Casual")
          } else if (valueVeg === 2) {
            setVeganButtonColor("green");
            setVeganButtonText("Strict")
          }
          if (valueVeg2 === 0) {
            setVegetarienButtonColor("lightgreen");
            setVegetarienButtonText("No")
          } else if (valueVeg2 === 1) {
            setVegetarienButtonColor("limegreen");
            setVegetarienButtonText("Casual")
          } else if (valueVeg2 === 2) {
            setVegetarienButtonColor("green");
            setVegetarienButtonText("Strict")
          }
        })
        .catch(function (error) {
            if (error.response.status === 401)
                throw(error);
            alert(error);
        }));
        APIRoute(() => axios.get('http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + "settings/", {headers: {Authorization: `Bearer `+ localStorage.getItem("token")}})
        .then(function (response) {
          const res = response.data;
      const newElements = [];

      res.forEach((item) => {
        const tmp = premiereLettreEnMajuscule(item.restrictionname);
        console.log(tmp);
        if (tmp !== 'Vegan' && tmp !== 'Vegetarian') {
          newElements.push(tmp);
        }
      });

      setElementsAjoutes((prevElements) => [...prevElements, ...newElements]);
    }).catch(function (error) {
          if (error.response.status === 401)
              throw(error);
          alert(error);
      }));
}, []);
  const handleLogout = () => {
    // Effectuez ici toute logique de déconnexion, par exemple, déconnexion depuis votre backend, suppression de jetons, etc.
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    // Actualisez la page pour déconnecter l'utilisateur
    history.push('/');
    window.location.reload();
    
  };

  
  const AfficherElement = (element) => {
    console.log(element)
    if (!elementsAjoutes.includes(element)) {
    const nouvelleListe = [...elementsAjoutes, element];
    setElementsAjoutes(nouvelleListe);
    }
  }
  
  // Fonction pour ajouter un élément à la liste
  const ajouterElement = (element) => {
    console.log(element)
    if (!elementsAjoutes.includes(element)) {
      console.log(element)
      let qs = require('qs')
      let data = qs.stringify({
                'alertActivation': `${true}`,
                'restrictionName': `${element.toLowerCase()}`,
                'strongness': `${2}`
            })
      const config = {
        method: 'post',
        url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'settings',
        data: data,
        headers: {
          Authorization: `Bearer `+ localStorage.getItem("token"),
          }
        };
        APIRoute(() => axios(config).then(function (response) {
          const nouvelleListe = [...elementsAjoutes, element];
          setElementsAjoutes(nouvelleListe);
      })
      .catch(function (error) {
          alert(error);
      }));
    }
  };

  // Fonction pour supprimer un élément de la liste
  const supprimerElement = (index) => {
    const nouvelleListe = [...elementsAjoutes];
    const listValue = nouvelleListe[index].toLowerCase()
    APIRoute(() => axios.delete('http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + "settings/", {headers: {Authorization: `Bearer `+ localStorage.getItem("token")}, data: {'restrictionName': `${listValue}`}})
    .then(function (response) {
      nouvelleListe.splice(index, 1);
      setElementsAjoutes(nouvelleListe);
  })
  .catch(function (error) {
      if (error.response.status === 401)
          throw(error)
      console.log(error);
  }));
  };

  // Liste prédéfinie d'éléments
  const elementsPredefinis = [
    "Tree nuts",
    "Eggs",
    "Milk",
    "Mustard",
    "Celery",
    "Sesame",
    "Lupin",
    "Gluten",
    "Fish",
    "Wheat",
    "Soy",
    "Peanuts",
    "Crustaceans",
  ];

  return (
    <>
      <div className='profil' id='profil'>
        <div className='container'>
          <h2>{translate['Profil'][localStorage.getItem('lang')]}</h2>
          <span className='line'></span>
          <div className='content'>
            <div className='card'>
              <img src={avatar} alt='Avatar' className='avatar-image' />
              <button onClick={handleLogout}>
                {translate['Logout'][localStorage.getItem('lang')]}
              </button>
            </div>
            <div className='card'>
              <button
                style={{ backgroundColor: veganButtonColor }}
                onClick={() => changeButtonColorAndText()}
              >
                {translate['Vegan'][localStorage.getItem('lang')]}
              </button>
              <div>{veganButtonText}</div>
              <button
                style={{ backgroundColor: vegetarienButtonColor }}
                onClick={() => changeButtonColorAndText2()}
              >
                {translate['Vegetarian'][localStorage.getItem('lang')]}
              </button>
              <div>{vegetarienButtonText}</div>
            </div>
            <div className='card'>
              <h1>{translate['Allergies'][localStorage.getItem('lang')]}</h1>
              <select onChange={(e) => ajouterElement(e.target.value)}>
                {elementsPredefinis.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>
            <div className='card'>
              {translate['YourAllergies'][localStorage.getItem('lang')]}
              <ul>
                {elementsAjoutes.map((element, index) => (
                  <li key={index}>
                    {element}{' '}
                    <button onClick={() => supprimerElement(index)}>
                      {translate['Delete'][localStorage.getItem('lang')]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


  export default function Profil() {
    return (
      <>
        <User />
        <Footer />
      </>
    )
  }