import React from "react";

const Characters = ({ characters, filter }) => {
  return (
    <div>
      {characters.map((character) => (
        <div
          key={character.id}>
          <h3>{character.name}</h3>
          <img src={character.image}></img>
          <p>{character.gender}</p>
          <hr />
          <p>{character.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Characters;