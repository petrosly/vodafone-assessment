import React from "react";

const TopComponent = (props) => {
  return (
    <div className="top-component">
      <h2>{props.description}</h2>
      <div className="sections">
        <p className="section-one">Section 1</p>
        <p className="section-two">Section 2</p>
      </div>
    </div>
  );
};

export default TopComponent;
