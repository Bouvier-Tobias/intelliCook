import React, { useState, useEffect } from "react";

function BarreDeRecherche() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

  return (
    <div className="barreDeRecherche">
      <input
        type="text"
        placeholder="Rechercher un plat..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="resultatrecherches">
        {filteredData.map((item) => (
          <div key={item.id} className="resultatrecherche">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        ))}
        {filteredData.length === 0 && (
          <p>Aucun résultat trouvé pour "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
}

export default BarreDeRecherche;
