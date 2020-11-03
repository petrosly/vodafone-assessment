import React, { useState, useEffect } from "react";

const Form = (props) => {
  return (
    <div className="form-content">
      <h2>{props.formText != null ? props.formText : "Loading"}</h2>
      <p>
        We work with ecosystem leaders, corporation and startups worldwide. How
        can we help you?
      </p>
      <form>
        <input
          className="telephoneNubmer"
          type="tel"
          placeholder={
            props.formLabels.length > 0 ? props.formLabels[0] : "Loading"
          }
        />
        <input
          className="email"
          type="email"
          placeholder={
            props.formLabels.length > 0 ? props.formLabels[1] : "Loading"
          }
        />
        <input
          className="password"
          type="password"
          placeholder={
            props.formLabels.length > 0 ? props.formLabels[2] : "Loading"
          }
        />
        <button type="submit">
          {props.buttonText != null ? props.buttonText : "Loading"}
        </button>
      </form>
    </div>
  );
};

export default Form;
