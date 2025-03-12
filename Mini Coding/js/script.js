const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    let slides = slider.querySelectorAll(".slide");
    let prevBtn = slider.querySelector(".prev");
    let nextBtn = slider.querySelector(".next");
    let slideIndex = 0;
    let intervalId;

    if (slides.length === 0) {
      console.warn("No slides found in slider.");
      return;
    }

    function showSlide(index) {
      if (index >= slides.length) {
        slideIndex = 0;
      } else if (index < 0) {
        slideIndex = slides.length - 1;
      }

      slides.forEach((slide) => slide.classList.remove("displaySlide"));
      slides[slideIndex].classList.add("displaySlide");
    }

    function nextSlide() {
      slideIndex++;
      showSlide(slideIndex);
    }

    function prevSlide() {
      slideIndex--;
      showSlide(slideIndex);
    }

    function startSlider() {
      showSlide(slideIndex);
      intervalId = setInterval(nextSlide, 7000);
    }

    prevBtn?.addEventListener("click", prevSlide);
    nextBtn?.addEventListener("click", nextSlide);

    startSlider();
  });
});
