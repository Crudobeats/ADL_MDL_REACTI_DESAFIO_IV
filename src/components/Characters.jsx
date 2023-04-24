import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

const Character = ({ character }) => {
  return (
    <div className="col-md-3">
      <Card className="my-3">
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>
            <strong>Status: </strong> {character.status}
          </Card.Text>
          <Card.Text>
            <strong>Species: </strong> {character.species}
          </Card.Text>
          <Card.Text>
            <strong>Gender: </strong> {character.gender}
          </Card.Text>
          <Button variant="primary" href={character.url} target="_blank">
            More info
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Character;