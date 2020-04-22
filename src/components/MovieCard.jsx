import React from "react";

function MovieCard(props) {
  return (
    <div className="title">
      <div>
        <h2 className="title">{props.title}</h2>
      </div>
    </div>
  );
}

export default MovieCard;
