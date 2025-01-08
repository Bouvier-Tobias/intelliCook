import React from "react";
const Recette = ({ recette }) => {
  return (
    <div className="recette">
      <img src={recette.image} alt={recette.titre} />
      <h2>{recette.titre}</h2>
    </div>
  );
};
export default Recette;
