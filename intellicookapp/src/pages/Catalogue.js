import { useEffect, useState } from "react";
export default function Recette() {
  const [recette, setRecette] = useState([]);
  useEffect(() => {
    fetch("recette.json")
      .then((response) => response.json())
      .then((data) => setRecette(data.recette))
      .catch((error) => console.log(error));
  }, []);
  function ListRecette() {
    return (
      <div>
        <h1>Recette</h1>
      </div>
    );
  }
}
return <ListRecette />;
