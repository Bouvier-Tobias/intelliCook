import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipe.json"; // Import du JSON
import { addFavorite, isFavorite, removeFavorite } from "../utils/favorites";
import NavBar from "./NavBar";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(isFavorite(recipe.name)); // État local pour le favori

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(recipe.name);
    } else {
      addFavorite(recipe);
    }
    setFavorite(!favorite); // Mise à jour de l'état local
  };

  return (
    <div className="container">
      <div onClick={() => navigate(`/recipe/${recipe.name}`)}>
        <div className="image-container">
          <h3 className="taille">{recipe.name}</h3>
          <img className="img_Recipe" src={recipe.image} alt={recipe.name} />
        </div>
      </div>
      <img
        className="favorite-icon"
        onClick={handleFavoriteClick}
        src={
          favorite ? "/icones/Icone-Heart-Pink.svg" : "/icones/Icone-Heart.svg"
        }
        alt={favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
      />
    </div>
  );
}

function Catalogue() {
  return (
    <div className="catalogue">
      <NavBar />
      <img src="./logo_version_claire.png" alt="" />
      <div className="box-recipe">
        <h1>Catalogue des Recettes</h1>

        <div className="image-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.name} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
