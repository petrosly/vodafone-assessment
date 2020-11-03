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
