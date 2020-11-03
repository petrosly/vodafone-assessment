import React from "react";

const Services = (props) => {
  return (
    <div className="services">
      <h3>{props.title != null ? props.title : "Loading"}</h3>
      <h2>{props.graphText != null ? props.graphText : "Loading"}</h2>
      <div className="percentages">
        <div className="percentage-1">
          <div className="percentage-bar">
            <p>{props.stats.length > 0 ? props.stats[0].title : "Loading"}</p>

            {props.stats.length > 0
              ? props.stats[0].amount / 10 + "%"
              : "Loading"}
          </div>
          <div className="div-wrapper">
            <div
              className="percentage-div-one"
              style={{ width: props.stats[0].amount / 10 + "%" }}
            >
              {" "}
            </div>
          </div>
        </div>
        <div className="percentage-2">
          <div className="percentage-bar">
            <p>{props.stats.length > 0 ? props.stats[1].title : "Loading"}</p>
            {props.stats.length > 0
              ? props.stats[1].amount / 10 + "%"
              : "Loading"}
          </div>
          <div className="div-wrapper">
            <div
              className="percentage-div-two"
              style={{ width: props.stats[1].amount / 10 + "%" }}
            >
              {" "}
            </div>
          </div>
        </div>
        <div className="percentage-3">
          <div className="percentage-bar">
            <p>{props.stats.length > 0 ? props.stats[2].title : "Loading"}</p>

            {props.stats.length > 0
              ? props.stats[2].amount / 10 + "%"
              : "Loading"}
          </div>
          <div className="div-wrapper">
            <div
              className="percentage-div-three"
              style={{ width: props.stats[2].amount / 10 + "%" }}
            >
              {" "}
            </div>
          </div>
        </div>
        <div className="percentage-4">
          <div className="percentage-bar">
            <p>{props.stats.length > 0 ? props.stats[3].title : "Loading"}</p>
            {props.stats.length > 0
              ? props.stats[3].amount / 10 + "%"
              : "Loading"}
          </div>
          <div className="div-wrapper">
            <div
              className="percentage-div-four"
              style={{ width: props.stats[3].amount / 10 + "%" }}
            >
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
