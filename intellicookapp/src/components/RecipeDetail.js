import { useState } from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipe.json";
import { addFavorite, isFavorite, removeFavorite } from "../utils/favorites";
import Logo from "./Logo";
import Navbar from "./NavBar";

function RecipeDetail() {
  const { name } = useParams();
  const recipe = recipes.find((r) => r.name === name);
  const [favorite, setFavorite] = useState(isFavorite(recipe.name));

  if (!recipe) {
    return <p>Recette non trouvée.</p>;
  }

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(recipe.name);
    } else {
      addFavorite(recipe);
    }
    setFavorite(!favorite); // Mise à jour de l'état local
  };

  return (
    <div className="body_recipedetail">
      <Navbar />
      <Logo />
      <h1>{recipe.name}</h1>
      <div className="image_block">
        <img
          className="recipe_image"
          src={recipe.image}
          alt={recipe.name}
        ></img>

        <img
          className="favorite-icon"
          onClick={handleFavoriteClick}
          src={
            favorite
              ? "/icones/Icone-Heart-red.svg"
              : "/icones/Icone-Heart-Black.svg"
          }
          alt={favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
        />
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
