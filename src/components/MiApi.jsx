import React, { useState, useEffect } from "react";
import Character from "./Characters";
import Row from "react-bootstrap/Row";

const MiApi = () => {
  const [characters, setCharacters] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [sortBy, setSortBy] = useState("");

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

  const sortCharacters = (characters, sortBy) => {
    if (sortBy === "name") {
      return characters.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "gender") {
      return characters.sort((a, b) => a.gender.localeCompare(b.gender));
    } else {
      return characters;
    }
  };

  return (
    <div>
      <div className="search">
        <input
          className="mb-3"
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
          type="text"
          placeholder="Introduce un nombre para buscar"
        />
        <div className="mb-2">
          <label className="me-2">Ordenar por:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="name">Nombre</option>
            <option value="gender">Género</option>
          </select>
        </div>
        <Row>
          {sortCharacters(characters, sortBy)
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

