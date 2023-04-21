import React, { useState, useEffect } from "react";
import Characters from "./Characters";

const MiApi = () => {
  const [characters, setCharacters] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <div>
      <div className="container">
        <input
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
          type="text"
          placeholder="Introduce un nombre"
        />
        <Characters
          characters={characters.filter((character) =>
            character.name.toLowerCase().includes(busqueda.toLowerCase())
          )}
          filter={busqueda}
        />
      </div>
    </div>
  );
};

export default MiApi;