import React, { useState, useEffect } from "react";
import TopComponent from "./pages-components/TopComponent";
import Slider from "../slider/Slider";
import Form from "./pages-components/Form";
import Services from "./pages-components/Services";

const HomePageTwo = () => {
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
    <div className="home-page-two">
      <Slider />
      <div className="main">
        <TopComponent
          description={home.length > 0 ? home[0].description : "Loading"}
        />
        <div className="main-content">
          <Services
            title={home.length > 0 ? home[0].sections[1].title : "Loading"}
            graphText={
              home.length > 0 ? home[0].sections[1].graphText : "Loading"
            }
            stats={home.length > 0 ? home[0].sections[1].stats : "Loading"}
          />
          <Form
            formText={
              home.length > 0 ? home[0].sections[1].formText : "Loading"
            }
            formLabels={
              home.length > 0 ? home[0].sections[1].formLabels : "Loading"
            }
            buttonText={
              home.length > 0 ? home[0].sections[1].buttonText : "Loading"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageTwo;
