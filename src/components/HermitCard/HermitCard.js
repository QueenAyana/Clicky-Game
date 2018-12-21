import React from "react";
import "./Hermit.css";

const HermitCard = props => (
  <img src={props.image} alt={props.id} onClick={() => props.ifClicked(props.id)} className="img-thumbnail" />
);

export default HermitCard;