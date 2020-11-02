import React, { useState, useEffect } from "react";
import PageNav from "./slider-components/PageNav";
import Slide from "./slider-components/Slide";

function Slider() {
  const [hasError, setErrors] = useState(false);
  const [slides, setSlides] = useState([]);

  async function fetchData() {
    const res = await fetch(
      "https://voda-react-assessment.herokuapp.com/slider"
    );
    res
      .json()
      .then((res) => setSlides(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Slide
        title={slides.length > 0 ? slides[0].title : "Loading"}
        subtitle={slides.length > 0 ? slides[0].subtitle : "Loading"}
        image={slides.length > 0 ? slides[0].image : "Loading"}
      >
        <PageNav />
      </Slide>
      <Slide
        title={slides.length > 0 ? slides[1].title : "Loading"}
        subtitle={slides.length > 0 ? slides[1].subtitle : "Loading"}
        image={slides.length > 0 ? slides[1].image : "Loading"}
      >
        <PageNav />
      </Slide>
      <Slide
        title={slides.length > 0 ? slides[2].title : "Loading"}
        subtitle={slides.length > 0 ? slides[2].subtitle : "Loading"}
        image={slides.length > 0 ? slides[2].image : "Loading"}
      >
        <PageNav />
      </Slide>
    </div>
  );
}

export default Slider;
