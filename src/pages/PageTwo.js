import React, { useState, useEffect } from "react";
import Slider from "../slider/Slider";
import TileGallery from "./pages-components/TileGallery";
import TopComponent from "./pages-components/TopComponent";

const PageTwo = () => {
  const [hasError, setErrors] = useState(false);
  const [page, setPage] = useState([]);

  async function fetchData() {
    const res = await fetch("https://voda-react-assessment.herokuapp.com/page");
    res
      .json()
      .then((res) => setPage(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="page-two">
      <Slider />
      <div className="content">
        <TopComponent
          description={page.length > 0 ? page[0].description : "Loading"}
        />
        <TileGallery tiles={page.length > 0 ? page[0].tiles : "Loading"} />
      </div>
    </div>
  );
};

export default PageTwo;
