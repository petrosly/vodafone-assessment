import React from "react";

const Services = (props) => {
  return (
    <div className="services">
      <h3>{props.title != null ? props.title : "Loading"}</h3>
      <h1>{props.graphText != null ? props.graphText : "Loading"}</h1>
      <div className="percentages">
        <div className="percentage-1">
          {props.stats.length > 0 ? props.stats[0].title : "Loading"}
          <span> </span>
          {props.stats.length > 0
            ? props.stats[0].amount / 10 + "%"
            : "Loading"}
        </div>
        <div className="percentage-2">
          {props.stats.length > 0 ? props.stats[1].title : "Loading"}
          <span> </span>
          {props.stats.length > 0
            ? props.stats[1].amount / 10 + "%"
            : "Loading"}
        </div>
        <div className="percentage-3">
          {props.stats.length > 0 ? props.stats[2].title : "Loading"}
          <span> </span>
          {props.stats.length > 0
            ? props.stats[2].amount / 10 + "%"
            : "Loading"}
        </div>
        <div className="percentage-4">
          {props.stats.length > 0 ? props.stats[3].title : "Loading"}
          <span> </span>
          {props.stats.length > 0
            ? props.stats[3].amount / 10 + "%"
            : "Loading"}
        </div>
      </div>
    </div>
  );
};

export default Services;
