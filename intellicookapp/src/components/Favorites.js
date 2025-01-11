import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFavorites, removeFavorite } from "../utils/favorites";
import NavBar from "./NavBar";

function Favorites() {
  const [favorites, setFavorites] = useState(getFavorites);
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return <p>Aucune recette dans les favoris.</p>;
  }

  const handleRemoveFavorite = (recipeName) => {
    removeFavorite(recipeName); // Supprime du stockage (par exemple, localStorage ou autre)
    setFavorites(getFavorites()); // Met à jour l'état avec la nouvelle liste des favoris
  };

  return (
    <div className="favoris">
      <NavBar />
      {favorites.map((recipe) => (
        <div className="grid_Favoris" key={recipe.name}>
          <div className="box_Img">
            <h3>{recipe.name}</h3>
            <img
              className="img_favoris"
              onClick={() => navigate(`/recipe/${recipe.name}`)}
              src={recipe.image}
              alt={recipe.name}
            />
            <img
              className={`icone_favoris ${
                favorites.find((fav) => fav.name === recipe.name)
                  ? "active"
                  : ""
              }`}
              onClick={() => handleRemoveFavorite(recipe.name)}
              src={
                favorites.find((fav) => fav.name === recipe.name)
                  ? "/icones/Icone-Heart-red.svg"
                  : "/icones/Icone-Heart-Black.svg"
              }
              alt={recipe.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
