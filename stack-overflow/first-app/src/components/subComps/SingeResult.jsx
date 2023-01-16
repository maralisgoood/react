import React from "react";
import "../../styles/singleResult.css";

export default function SingleResult(props) {
  return (
    <div id="singleCard">
      <div id="cardInfo">
        <p>
          <strong>{props.vote}</strong> votes
        </p>
        <button class="greenBtn">
          &#10003; <strong>{props.answer}</strong> answers
        </button>
        <a href="#" class="view">
          <strong>{props.view}</strong> views
        </a>
      </div>
      <div id="cardText">
        <h3>&#63; {props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
