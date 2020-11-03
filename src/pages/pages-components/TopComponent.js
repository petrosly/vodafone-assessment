import React from "react";
import { NavLink } from "react-router-dom";

const TopComponent = (props) => {
  return (
    <div className="top-component">
      <h2>{props.description}</h2>
      <div className="sections">
        <NavLink to="/" className="section-one-btn">
          <p className="section-one">Section 1</p>
        </NavLink>
        <NavLink to="/section2" className="section-two-btn">
          <p className="section-two">Section 2</p>
        </NavLink>
      </div>
    </div>
  );
};

export default TopComponent;
