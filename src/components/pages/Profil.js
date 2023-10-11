import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import { useHistory } from 'react-router-dom';
import videoFile from '../../images/video-4.mp4';
import axios from 'axios';
import translate from './../../Translation/Profil.json'


function premiereLettreEnMajuscule(chaine) {
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

// Utilisez un état local pour suivre la couleur de fond actuelle des boutons
function Profil() {
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
            url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'settings',
            data : data,
            headers: {
              Authorization: `Bearer `+ localStorage.getItem("token"),
            }
        };
        axios(config)
        .then().catch((err) => {
            if (err.response.status === 401)
                throw(err)
        })

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
            url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'settings',
            data : data,
            headers: {
              Authorization: `Bearer `+ localStorage.getItem("token"),
            }
        };
        axios(config)
        .then().catch((err) => {
            if (err.response.status === 401)
                throw(err)
        })
  };


  useEffect(() => {
    const config = {
        method: 'get',
        url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'settings',
        headers: {
          Authorization: `Bearer `+ localStorage.getItem("token"),
        }
    };
    axios(config)
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
        });
        axios.get('http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + "settings", {headers: {Authorization: `Bearer `+ localStorage.getItem("token")}})
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
      });
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
        axios(config).then(function (response) {
          const nouvelleListe = [...elementsAjoutes, element];
          setElementsAjoutes(nouvelleListe);
      })
      .catch(function (error) {
          alert(error);
      });        
    }
    
  };

  // Fonction pour supprimer un élément de la liste
  const supprimerElement = (index) => {
    const nouvelleListe = [...elementsAjoutes];
    const listValue = nouvelleListe[index].toLowerCase()
    axios.delete('http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + "settings", {headers: {Authorization: `Bearer `+ localStorage.getItem("token")}, data: {'restrictionName': `${listValue}`}})
    .then(function (response) {
      nouvelleListe.splice(index, 1);
      setElementsAjoutes(nouvelleListe);
  })
  .catch(function (error) {
      if (error.response.status === 401)
          throw(error)
      console.log(error);
  });
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

  // Styles CSS pour le conteneur
  const containerStyle = {
    display: "flex",
    flexDirection: "column", // Mettre les éléments en colonne
    alignItems: "center", // Centrer les éléments verticalement
    gap: "20px", // Espace entre les éléments
    textAlign: "center", // Centrer le texte
  };

  // Styles CSS pour les boutons
  const buttonStyle = {
    width: "150px", // Largeur fixe pour les boutons
    padding: "10px 20px", // Ajustez les valeurs pour la taille du bouton
    border: "none",
    cursor: "pointer",
  };

  const videoStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: -100,
    transform: 'translateX(-50%) translateY(-50%)',
    backgroundSize: 'cover',
    opacity: 0.5
  };

  const logoutButtonStyle = {
    width: "150px",
    backgroundColor: "#FF5733", // Couleur de fond
    color: "#FFF", // Couleur du texte
    padding: "10px 20px", // Espacement interne
    border: "none", // Supprime la bordure
    borderRadius: "5px", // Coins arrondis
    cursor: "pointer", // Curseur au survol
    fontSize: "16px", // Taille du texte
  };

  return (
    <>
      <div style={containerStyle}>
        <video style={videoStyles} autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
        </video> 
        <h1>{translate["Profil"][localStorage.getItem("lang")]}</h1>
        <div>
          <button
            style={{ ...buttonStyle, backgroundColor: veganButtonColor }}
            onClick={() =>
              changeButtonColorAndText(
              )
            }
          >
            {translate["Vegan"][localStorage.getItem("lang")]}
          </button>
          <div>{veganButtonText}</div>
        </div>
        <div>
        <button
            style={{ ...buttonStyle, backgroundColor: vegetarienButtonColor }}
            onClick={() =>
              changeButtonColorAndText2(
              )
            }
          >
            {translate["Vegetarian"][localStorage.getItem("lang")]}
          </button>
          <div>{vegetarienButtonText}</div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h2>{translate["Allergies"][localStorage.getItem("lang")]}</h2>
          <select onChange={(e) => ajouterElement(e.target.value)}>
            {elementsPredefinis.map((element) => (
              <option key={element} value={element}>
                {element}
              </option>
            ))}
          </select>
          <div style={{ marginTop: "10px" }}>{translate["YourAllergies"][localStorage.getItem("lang")]}</div>
          <ul>
            {elementsAjoutes.map((element, index) => (
              <li key={index}>
                {element}{" "}
                <button onClick={() => supprimerElement(index)}>{translate["Delete"][localStorage.getItem("lang")]}</button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleLogout} style={logoutButtonStyle}>
        {translate["Logout"][localStorage.getItem("lang")]}
        </button>
      </div>
      <Footer />
    </>
    
  );
}

  
  export default Profil;