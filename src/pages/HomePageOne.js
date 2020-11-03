import React, { useState, useEffect } from "react";
import Slider from "../slider/Slider";
import ImageGallery from "./pages-components/ImageGallery";
import TopComponent from "./pages-components/TopComponent";

const HomePage = () => {
  const [hasError, setErrors] = useState(false);
  const [home, setHome] = useState([]);

  async function fetchData() {
    const res = await fetch("https://voda-react-assessment.herokuapp.com/home");
    res
      .json()
      .then((res) => setHome(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home-page-one">
      <Slider />
      <div className="content">
        <TopComponent
          description={home.length > 0 ? home[0].description : "Loading"}
        />
        <ImageGallery
          images={home.length > 0 ? home[0].sections[0].images : "Loading"}
        />
      </div>
    </div>
  );
};

export default HomePage;
