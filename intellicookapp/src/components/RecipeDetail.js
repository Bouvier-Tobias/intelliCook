import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipe.json";
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";
import Navbar from "./NavBar";

function RecipeDetail() {
  const { name } = useParams();
  const recipe = recipes.find((r) => r.name === name);

  if (!recipe) {
    return <p>Recette non trouvée.</p>;
  }

  const handleFavoriteClick = () => {
    if (isFavorite(recipe.name)) {
      removeFavorite(recipe.name);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <div className="body_recipedetail">
      <Navbar />

      <h1>{recipe.name}</h1>
      <div className="image_block">
        <img
          className="recipe_image"
          src={recipe.image}
          alt={recipe.name}
        ></img>

        <img
          className="icone-Heart"
          onClick={handleFavoriteClick}
          src="/icones/Icone-Heart.svg"
          alt=""
        ></img>
        {isFavorite(recipe.name) ? "/Icone-Heart-Pink.svg" : "/Icone-Heart.svg"}
      </div>
      <div className="ingredients_block">
        <h2>Ingrédients :</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <hr></hr>
      <div className="materiel_block">
        <h2>Matériel nécessaire :</h2>
        <ul>
          {recipe.materiel.map((materiel, index) => (
            <li key={index}> {materiel} </li>
          ))}
        </ul>
      </div>
      <hr></hr>
      <div className="preparation_block">
        <h2>Préparation :</h2>
        <p>{recipe.instruction}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
