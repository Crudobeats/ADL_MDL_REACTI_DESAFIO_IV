import React, { useState, useEffect } from "react";
import Character from "./Characters";
import Row from "react-bootstrap/Row";

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
      <div className="search">
        <input className="mb-3"
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
          type="text"
          placeholder="Introduce un nombre para buscar"
        />
        <Row>
          {characters
            .filter((character) =>
              character.name.toLowerCase().includes(busqueda.toLowerCase())
            )
            .map((character) => (
              <Character key={character.id} character={character} />
            ))}
        </Row>
      </div>
    </div>
  );
};

export default MiApi;