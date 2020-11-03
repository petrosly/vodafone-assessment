import React from "react";

const Tile = (props) => {
  return (
    <div className="tile">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button>{props.link}</button>
    </div>
  );
};

export default Tile;
