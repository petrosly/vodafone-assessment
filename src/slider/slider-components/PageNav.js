import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import searchIcon from "../../assets/search-svgrepo-com.svg";

const PageNav = () => {
  const [hasError, setErrors] = useState(false);
  const [titles, setTitles] = useState([]);

  async function fetchData() {
    const res = await fetch("https://voda-react-assessment.herokuapp.com/menu");
    res
      .json()
      .then((res) => setTitles(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  let styles = { width: "20px" };

  return (
    <div className="page-nav">
      <NavLink to="/">
        <button className="first-title">
          {titles.length > 0 ? titles[0].title : "Loading..."}
        </button>
      </NavLink>
      <NavLink to="/page2">
        <button className="second-title">
          {titles.length > 0 ? titles[1].title : "Loading"}
        </button>
      </NavLink>
      <img
        className="search-icon"
        src={searchIcon}
        alt="Search icon"
        style={styles}
      />
    </div>
  );
};

export default PageNav;
