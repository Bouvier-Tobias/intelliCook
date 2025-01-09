import React from "react";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipe.json"; // Import du JSON
import { addFavorite, isFavorite, removeFavorite } from "../utils/favorites";
import NavBar from "./NavBar";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    if (isFavorite(recipe.name)) {
      removeFavorite(recipe.name);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <div>
      <h3 onClick={() => navigate(`/recipe/${recipe.name}`)}>{recipe.name}</h3>
      <button onClick={handleFavoriteClick}>
        {isFavorite(recipe.name)
          ? "Retirer des Favoris"
          : "Ajouter aux Favoris"}
      </button>
    </div>
  );
}

function Catalogue() {
  return (
    <div className="catalogue">
      <NavBar />
      <img src="./logo_version_claire.png" alt="" />

      <h1>Catalogue des Recettes</h1>
      <div className="image-grid">
        {recipes.map((recipe, index) => (
          <img RecipeCard key={index} src={recipe.image} alt={recipe.nom} />
        ))}

        {recipes.map((recipe) => (
          <RecipeCard key={recipe.name} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
