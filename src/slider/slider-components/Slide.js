import React from "react";
import PageNav from "./PageNav";

const Slide = (props) => {
  let styles = {
    backgroundImage: "url(" + props.image + ")",
  };
  return (
    <div style={styles}>
      <PageNav />
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Slide;
