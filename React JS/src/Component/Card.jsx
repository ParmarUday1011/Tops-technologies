import React from "react";
// import boat from "./img/download.jfif";
import Subcomponent from "./Subcomponent.jsx";
export default function Card(props) {
  return (
    <div>
      <div class="card">
        <img src="#" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.u}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <Subcomponent />
      </div>
    </div>
  );
}
