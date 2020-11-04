import React, { useState, useEffect } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    setFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData == null) {
      alert("Add information");
      return false;
    }
    if (formData.telephone.length < 10 || formData.telephone.length > 14) {
      alert("Phone is not valid");
      return false;
    }
    if (
      formData.telephone[0] !== "2" &&
      formData.telephone[0] !== "6" &&
      formData.telephone[0] !== "+"
    ) {
      alert("Invalid phone start");
      return false;
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      alert("Invalid email format");
      return false;
    }
    if (formData.password == null) {
      alert("You must add a password that meets all the criteria");
      return false;
    }
    if (formData.password.length < 9) {
      alert("Password must be more than 8 digits");
      return false;
    }
    //check for capital
    for (let i = 0; i < formData.password.length; i++) {
      if (formData.password[i] === formData.password[i].toUpperCase()) {
        break;
      }
      if (i === formData.password.length - 1) {
        alert("Password must contain at least one capital letter");
        return false;
      }
    }
    //check for lower
    for (let i = 0; i < formData.password.length; i++) {
      if (formData.password[i] === formData.password[i].toLowerCase()) {
        break;
      }
      if (i === formData.password.length - 1) {
        alert("Password must contain at least one lowercase letter");
        return false;
      }
    }
    //check for symbol
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!format.test(formData.password)) {
      alert("Password must contain at least one symbol");
      return false;
    }
    //check for number
    if (/\d/.test(formData.password) == false) {
      alert("Password must contain at least one number");
      return false;
    }
    document.forms["myform"].submit();
    return true;
  };

  return (
    <div className="form-content">
      <h2>{props.formText != null ? props.formText : "Loading"}</h2>
      <p>
        We work with ecosystem leaders, corporation and startups worldwide. How
        can we help you?
      </p>
      <form name="myform">
        <input
          className="telephoneNubmer"
          name="telephone"
          type="tel"
          placeholder={
            props.formLabels.length > 0 ? props.formLabels[0] : "Loading"
          }
          onChange={handleChange}
        />
        <input
          className="email"
          name="email"
          type="email"
          placeholder={
            props.formLabels.length > 0 ? props.formLabels[1] : "Loading"
          }
          onChange={handleChange}
        />
        <input
          className="password"
          name="password"
          type="password"
          placeholder={
            props.formLabels.length > 0 ? props.formLabels[2] : "Loading"
          }
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          {props.buttonText != null ? props.buttonText : "Loading"}
        </button>
      </form>
    </div>
  );
};

export default Form;
