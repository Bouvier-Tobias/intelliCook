import React from "react";
const Recette = ({ recette }) => {
  return (
    <div className="body">
      <main>
        <img src={recette.image} alt="" />
        <div className="infos">
          <h2>{recette.titre}</h2>
        </div>
      </main>
    </div>
  );
};
export default Recette;
