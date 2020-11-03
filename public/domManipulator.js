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

window.addEventListener("load", () => {
  sliderHandler();

  document.querySelector(".section-one-btn").addEventListener("click", () => {
    console.log("section-one");
    sliderHandler();
  });

  document.querySelector(".section-two-btn").addEventListener("click", () => {
    console.log("section-two");
    sliderHandler();
  });
});
