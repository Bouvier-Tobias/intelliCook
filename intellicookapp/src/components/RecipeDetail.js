import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipe.json";
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";

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
    <div>
      <h1>{recipe.name}</h1>
      <button onClick={handleFavoriteClick}>
        {isFavorite(recipe.name)
          ? "Retirer des Favoris"
          : "Ajouter aux Favoris"}
      </button>
      <h2>Ingrédients :</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Préparation :</h2>
      <p>{recipe.instruction}</p>
    </div>
  );
}

export default RecipeDetail;
