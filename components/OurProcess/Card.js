import React from "react";
import { CardRoot } from "./styles";

const Card = ({ title, body }) => {
  return (
    <CardRoot>
      <div className="bg" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{body}</p>
    </CardRoot>
  );
};

export default Card;
