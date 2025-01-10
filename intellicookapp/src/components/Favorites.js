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
    <div className="favoris">
      <NavBar />
      {favorites.map((recipe) => (
        <div className="grid_Favoris">
          <div className="box_Img">
            <h3>{recipe.name}</h3>
            <img
              className="img_favoris"
              onClick={() => navigate(`/recipe/${recipe.name}`)}
              src={recipe.image}
              alt={recipe.name}
            />
            <img
              className="icone_favoris"
              onClick={() => removeFavorite(recipe.name)}
              src="/icones/Icone-Heart-Pink.svg"
              alt={recipe.name}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
