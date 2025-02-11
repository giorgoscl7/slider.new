const slides = document.getElementsByClassName("item");
let activeSlide = 0;
const dots = document.querySelectorAll(".dots li");

function setSlide(activeIndex) {
  for (let index = 0; index < slides.length; index++) {
    if (index === activeIndex) {
      slides[index].classList.remove("displayNone");
      slides[index].classList.add("displayBlock");
      dots[index].classList.add("active");
    } else {
      slides[index].classList.add("displayNone");
      slides[index].classList.remove("displayBlock");
      dots[index].classList.remove("active");
    }
  }
}

function startLoop() {
  activeSlide += 1;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setSlide(activeSlide);
}

function setPreviousSlide() {
  console.log(activeSlide);
  clearInterval(slideInterval);

  activeSlide -= 1;
  if (activeSlide <= 0) {
    activeSlide = slides.length - 1;
  }

  setSlide(activeSlide);
}

function setNextSlide() {
  clearInterval(slideInterval);
  activeSlide += 1;
  if (activeSlide >= slides.length) {
    activeSlide = 0;
  }
  setSlide(activeSlide);
}

function startInterval(mSeconds) {
  if (slideInterval == null) {
    console.log(slideInterval);
    slideInterval = 
    setInterval(startLoop, 2000);
  }
  // console.log('hello');
}

function stopInterval() {
  clearInterval(slideInterval);
  slideInterval = null;
}

// timerInput.addEventlistener('change', () => {
//   const newTimer = document.forms[0].timer.value;
//   stopInterval();
//   startInterval(newTimer);
// })

slideInterval = setInterval(startLoop, 2000);
console.log(slideInterval);
