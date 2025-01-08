import { useEffect, useState } from "react";
import Recette from "../components/Recette";
export default function Catalogue() {
  const [recette, setRecette] = useState([]);
  useEffect(() => {
    fetch("recette.json")
      .then((response) => response.json())
      .then((data) => setRecette(data.recette))
      .catch((error) => console.log(error));
  }, []);
  function ListCatalogue() {
    return recette.slice(0, 2).map((element, index) => {
      return (
        <div className="recette">
          <ul>
            <Recette key={index} recette={element} />
          </ul>
        </div>
      );
    });
  }
  return <ListCatalogue />;
}
