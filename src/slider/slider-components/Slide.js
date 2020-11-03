import React from "react";
import PageNav from "./PageNav";

const Slide = (props) => {
  let styles = {
    backgroundImage: "url(" + props.image + ")",
  };
  return (
    <div className="slide" id={props.id} style={styles}>
      <PageNav />
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <ul className="carousel-controller">
        <li className="first-button"></li>
        <li className="second-button"></li>
        <li className="third-button"></li>
      </ul>
    </div>
  );
};

export default Slide;
