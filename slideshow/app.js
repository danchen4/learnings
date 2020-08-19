(function () {
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const slide = document.querySelector('.slide');
  let slideIndex = 0;
  let slideShowInterval, dots, imageArray;

  const INTERVAL = 3000;
  const MAX_SLIDES = 6;

  async function initCarousel() {
    imageArray = await loadImages();
    // If image array exceeds the maximum, then shorten the array
    if (imageArray.length > MAX_SLIDES) imageArray.length = MAX_SLIDES;
    // Initialize the number of dots
    initDots(imageArray.length);

    // Set first image and first dot styling
    dots = document.querySelectorAll('.dot');
    dots[slideIndex].classList.add('active');
    slide.src = imageArray[slideIndex];

    slideShowInterval = setInterval(nextSlide, INTERVAL);
  }

  function clickPrev() {
    clearInterval(slideShowInterval);
    prevSlide();
    slideShowInterval = setInterval(nextSlide, INTERVAL);
  }

  function clickNext() {
    clearInterval(slideShowInterval);
    nextSlide();
    slideShowInterval = setInterval(nextSlide, INTERVAL);
  }

  function prevSlide() {
    dots[slideIndex].classList.remove('active');
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = imageArray.length - 1;
    }
    dots[slideIndex].classList.add('active');
    slide.src = imageArray[slideIndex];
  }

  function nextSlide() {
    dots[slideIndex].classList.remove('active');
    slideIndex++;
    if (slideIndex > imageArray.length - 1) {
      slideIndex = 0;
    }
    dots[slideIndex].classList.add('active');
    slide.src = imageArray[slideIndex];
  }

  // fetch images from API endpoint and return an array with image URLs
  async function loadImages() {
    const URL = 'https://www.reddit.com/r/aww/top/.json?t=all';
    const imageArray = [];

    const response = await fetch(URL);
    const data = await response.json();

    const posts = data.data.children;

    posts.forEach((post) => {
      const imageURL = post.data.url_overridden_by_dest;

      if (typeof imageURL === 'string' && imageURL.indexOf('.jpg') > 0) {
        imageArray.push(imageURL);
      }
    });

    return imageArray;
  }

  function initDots(num) {
    let array = new Array(num).fill('');
    const dot = array
      .map((item) => {
        return `
      <span class="dot"></span>
    `;
      })
      .join('');
    document.querySelector('.dots').innerHTML = dot;
  }

  window.addEventListener('DOMContentLoaded', initCarousel);

  prev.addEventListener('click', clickPrev);
  next.addEventListener('click', clickNext);
})();
