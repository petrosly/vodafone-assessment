import React from "react";
import Tile from "./Tile";

const TileGallery = (props) => {
  return (
    <div className="tile-gallery">
      <Tile
        title={props.tiles.length > 0 ? props.tiles[0].title : "Loading"}
        description={
          props.tiles.length > 0 ? props.tiles[0].description : "Loading"
        }
        link={props.tiles.length > 0 ? props.tiles[0].link : "Loading"}
      />
      <Tile
        title={props.tiles.length > 0 ? props.tiles[1].title : "Loading"}
        description={
          props.tiles.length > 0 ? props.tiles[1].description : "Loading"
        }
        link={props.tiles.length > 0 ? props.tiles[1].link : "Loading"}
      />
      <Tile
        title={props.tiles.length > 0 ? props.tiles[2].title : "Loading"}
        description={
          props.tiles.length > 0 ? props.tiles[2].description : "Loading"
        }
        link={props.tiles.length > 0 ? props.tiles[2].link : "Loading"}
      />
    </div>
  );
};

export default TileGallery;
