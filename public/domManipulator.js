window.addEventListener("load", () => {
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
  console.log("dom-handler finished");
});
