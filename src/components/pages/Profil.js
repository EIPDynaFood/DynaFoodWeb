import React, { useState } from 'react';
import Footer from '../Footer';
import { useHistory } from 'react-router-dom';
import videoFile from '../../images/video-4.mp4';

// Utilisez un état local pour suivre la couleur de fond actuelle des boutons
function Profil() {
  // Utilisez un état local pour suivre la couleur de fond actuelle des boutons
  const [veganButtonColor, setVeganButtonColor] = useState("lightgreen");
  const [vegetarienButtonColor, setVegetarienButtonColor] = useState("lightgreen");
  const history = useHistory();
  // Utilisez un état local pour suivre le texte actuel des boutons
  const [veganButtonText, setVeganButtonText] = useState("No");
  const [vegetarienButtonText, setVegetarienButtonText] = useState("No");

  // Utilisez un état local pour suivre les éléments ajoutés
  const [elementsAjoutes, setElementsAjoutes] = useState([]);

  // Fonction pour changer la couleur de fond du bouton et le texte
  const changeButtonColorAndText = (button, currentColor, text, setText) => {
    const colors = ["lightgreen", "limegreen", "green"];
    const currentIndex = colors.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    const nextColor = colors[nextIndex];

    // Mettre à jour la couleur du bouton
    button(nextColor);

    // Mettre à jour le texte en fonction de la couleur
    if (nextColor === "limegreen") {
      setText("Casual");
    } else if (nextColor === "green") {
      setText("Strict");
    } else {
      setText("No");
    }
  };

  const handleLogout = () => {
    // Effectuez ici toute logique de déconnexion, par exemple, déconnexion depuis votre backend, suppression de jetons, etc.
    localStorage.removeItem('token');
    // Actualisez la page pour déconnecter l'utilisateur
    history.push('/');
    window.location.reload();
  };
  
  // Fonction pour ajouter un élément à la liste
  const ajouterElement = (element) => {
    setElementsAjoutes([...elementsAjoutes, element]);
  };

  // Fonction pour supprimer un élément de la liste
  const supprimerElement = (index) => {
    const nouvelleListe = [...elementsAjoutes];
    nouvelleListe.splice(index, 1);
    setElementsAjoutes(nouvelleListe);
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
        <h1>Profil Page</h1>
        <div>
          <button
            style={{ ...buttonStyle, backgroundColor: veganButtonColor }}
            onClick={() =>
              changeButtonColorAndText(
                setVeganButtonColor,
                veganButtonColor,
                veganButtonText,
                setVeganButtonText
              )
            }
          >
            Vegan
          </button>
          <div>{veganButtonText}</div>
        </div>
        <div>
          <button
            style={{ ...buttonStyle, backgroundColor: vegetarienButtonColor }}
            onClick={() =>
              changeButtonColorAndText(
                setVegetarienButtonColor,
                vegetarienButtonColor,
                vegetarienButtonText,
                setVegetarienButtonText
              )
            }
          >
            Végétarien
          </button>
          <div>{vegetarienButtonText}</div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h2>Allergies</h2>
          <select onChange={(e) => ajouterElement(e.target.value)}>
            {elementsPredefinis.map((element) => (
              <option key={element} value={element}>
                {element}
              </option>
            ))}
          </select>
          <div style={{ marginTop: "10px" }}>Your Allergies:</div>
          <ul>
            {elementsAjoutes.map((element, index) => (
              <li key={index}>
                {element}{" "}
                <button onClick={() => supprimerElement(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleLogout} style={logoutButtonStyle}>
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
}

  
  export default Profil;