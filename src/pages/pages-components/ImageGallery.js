import React from "react";

const ImageGallery = (props) => {
  return (
    <div className="image-gallery">
      <img
        className="first-image"
        src={props.images.length > 0 ? props.images[0].img : "Loading"}
        alt={props.images.length > 0 ? props.images[0].title : "Loading"}
      ></img>
      <img
        className="second-image"
        src={props.images.length > 0 ? props.images[1].img : "Loading"}
        alt={props.images.length > 0 ? props.images[1].title : "Loading"}
      ></img>
      <img
        className="third-image"
        src={props.images.length > 0 ? props.images[2].img : "Loading"}
        alt={props.images.length > 0 ? props.images[2].title : "Loading"}
      ></img>
      <img
        className="fourth-image"
        src={props.images.length > 0 ? props.images[3].img : "Loading"}
        alt={props.images.length > 0 ? props.images[3].title : "Loading"}
      ></img>
      <img
        className="fifth-image"
        src={props.images.length > 0 ? props.images[4].img : "Loading"}
        alt={props.images.length > 0 ? props.images[4].title : "Loading"}
      ></img>
    </div>
  );
};

export default ImageGallery;
