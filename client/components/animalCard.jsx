import React from "react";
import PropTypes from "prop-types";
import AnimalDetails from "./animalDetails";
import Card from "./card";

const AnimalCard = ({ name, size, ...props }) => {
  return (
    <Card title="Animal" details={<em>Mammal</em>}>
      <h3>{name}</h3>
      <div>{size}</div>
      <AnimalDetails {...props} />
    </Card>
  );
};

export default AnimalCard;

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
