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
    sliderHandler();
  }, []);

  function sliderHandler() {
    let firstSlide = document.querySelector("#first-slide");
    let secondSlide = document.querySelector("#second-slide");
    let thirdSlide = document.querySelector("#third-slide");

    document.querySelectorAll(".first-button").forEach((btn) => {
      btn.addEventListener("click", function () {
        disableSlides();
        firstSlide.style.display = "flex";
      });
    });

    document.querySelectorAll(".second-button").forEach((btn) => {
      btn.addEventListener("click", function () {
        disableSlides();
        secondSlide.style.display = "flex";
      });
    });

    document.querySelectorAll(".third-button").forEach((btn) => {
      btn.addEventListener("click", function () {
        disableSlides();
        thirdSlide.style.display = "flex";
      });
    });

    const disableSlides = () => {
      firstSlide.style.display = "none";
      secondSlide.style.display = "none";
      thirdSlide.style.display = "none";
    };

    //Initial load
    disableSlides();
    firstSlide.style.display = "flex";
  }

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
