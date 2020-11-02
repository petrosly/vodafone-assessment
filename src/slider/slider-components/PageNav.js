import React, { useState, useEffect } from "react";
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

  return (
    <div className="page-nav">
      <button className="first-title">
        {titles.length > 0 ? titles[0].title : "Loading..."}
      </button>
      <button className="second-title">
        {titles.length > 0 ? titles[1].title : "Loading"}
      </button>
      <img className="search-icon" src={searchIcon} alt="Search icon" />
    </div>
  );
};

export default PageNav;
