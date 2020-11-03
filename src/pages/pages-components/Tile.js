import React from "react";

const Tile = (props) => {
  return (
    <div className="tile">
      <h1>{props.title != null ? props.title : "Loading"}</h1>
      <p>{props.description != null ? props.description : "Loading"}</p>
      <button>{props.link != null ? props.link : "Loading"}</button>
    </div>
  );
};

export default Tile;
