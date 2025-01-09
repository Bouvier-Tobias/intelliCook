import React from "react";
import { getFavorites, removeFavorite } from "../utils/favorites";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Favorites() {
  const favorites = getFavorites();
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return <p>Aucune recette dans les favoris.</p>;
  }

  return (
    <div>
      <NavBar />
      <h1>Mes Favoris</h1>
      {favorites.map((recipe) => (
        <div key={recipe.name}>
          <h3 onClick={() => navigate(`/recipe/${recipe.name}`)}>
            {recipe.name}
          </h3>
          <button onClick={() => removeFavorite(recipe.name)}>
            Retirer des Favoris
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
