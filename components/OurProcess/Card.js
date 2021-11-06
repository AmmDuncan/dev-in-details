import React from "react";
import { CardRoot } from "./styles";

const Card = ({ title, body, optional }) => {
  return (
    <CardRoot>
      <div className="bg" aria-hidden="true" />
      <h3 className={optional ? "optional" : ""}>{title}</h3>
      <p>{body}</p>
    </CardRoot>
  );
};

export default Card;
