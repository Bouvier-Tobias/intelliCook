import React from "react";
import { useNavigate } from "react-router-dom";
import { getFavorites, removeFavorite } from "../utils/favorites";
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
            <div className="image">
              <div>{recipe.name}</div>
              <img src={recipe.image} alt={recipe.name} />
            </div>
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
