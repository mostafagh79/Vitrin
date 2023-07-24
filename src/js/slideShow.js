let slideIndex = 0;
const slides = document.getElementsByClassName("slider--item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let intervalId;

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function showNextSlide() {
  slideIndex++;
  showSlide(slideIndex);
  resetInterval();
}

function showPrevSlide() {
  slideIndex--;
  showSlide(slideIndex);
  resetInterval();
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(showNextSlide, 3000);
}

showSlide(slideIndex);
intervalId = setInterval(showNextSlide, 3000);

prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);
