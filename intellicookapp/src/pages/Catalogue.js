





import { useEffect, useState } from "react";


// const Recette = () => {
//   const [recette, setRecette] = useState([]);

//   useEffect(() => {
//     fetch("recette.json")
//       .then((response) => response.json())
//       .then((data) => setRecette(data.recette))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="recette">
//       <h1>Nom de la recette</h1>
//       <ul>
//         {recette.map((recette, index) => (
//           <li key={index}>
//             <h2>{recette.titre}</h2>
//             <ul>
//               {/* Boucle sur les ingrédients de chaque recette */}
//               {recette.ingredients.map((ingredient, i) => (
//                 <li key={i}>{ingredient.quantité} {ingredient.suite} {ingredient.nom}</li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


const Recette = () => {
  const [recette, setRecette] = useState([]);

  useEffect(() => {
    fetch("recette.json")
      .then((response) => response.json())
      .then((data) => setRecette(data.recette))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="recette">
      <h1>{recette[1].titre}</h1>

      {/* Affichage des ingrédients de la première recette */}
      {recette.length > 0 && (
        <ul>
          {recette[1].ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.quantité} {ingredient.suite} {ingredient.nom}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};



export default Recette;

