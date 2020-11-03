import React from "react";

const ImageGallery = (props) => {
  return (
    <div className="image-gallery">
      <div className="first-image">
        <img
          src={props.images.length > 0 ? props.images[0].img : "Loading"}
          alt={props.images.length > 0 ? props.images[0].title : "Loading"}
        ></img>
      </div>
      <div>
        <img
          src={props.images.length > 0 ? props.images[1].img : "Loading"}
          alt={props.images.length > 0 ? props.images[1].title : "Loading"}
        ></img>
      </div>
      <div className="third-image">
        <img
          src={props.images.length > 0 ? props.images[2].img : "Loading"}
          alt={props.images.length > 0 ? props.images[2].title : "Loading"}
        ></img>
      </div>
      <div className="fourth-image">
        <img
          src={props.images.length > 0 ? props.images[3].img : "Loading"}
          alt={props.images.length > 0 ? props.images[3].title : "Loading"}
        ></img>
      </div>
      <div className="fifth-image">
        <img
          src={props.images.length > 0 ? props.images[4].img : "Loading"}
          alt={props.images.length > 0 ? props.images[4].title : "Loading"}
        ></img>
      </div>
    </div>
  );
};

export default ImageGallery;
