// Source: https://dev.to/macmacky/carousel-with-vanilla-javascript-1570

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const imgCarousel = document.querySelector('img');
const indicators = document.querySelectorAll('.indicators > span');
const images = ['./img/1.jpeg', './img/2.jpeg', './img/3.jpeg'];

// Helper Functions

const setAttr = (el, attr, value) => el.setAttribute(attr, value);
const getAttr = (el, attr) => el.getAttribute(attr);

const getImageIndex = (imageURL) => images.indexOf(imageURL);

const getCurrentImageIndex = () => {
  const currentImage = getAttr(imgCarousel, 'src');
  return getImageIndex(currentImage);
};

const getArrowLeftImageIndex = (currentIndex) => {
  return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
};

const getArrowRightImageIndex = (currentIndex) => {
  return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
};

const activateIndicator = (index) => {
  indicators.forEach((el, i) => {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
    }
    if (index === i) el.classList.add('active');
  });
};

const intervalSlider = (direction, delay = 1000) => {
  let callback = null,
    getNewIndexFunc = null;

  if (direction === 'left') {
    getNewIndexFunc = () => getArrowLeftImageIndex(getCurrentImageIndex());
  } else {
    getNewIndexFunc = () => getArrowRightImageIndex(getCurrentImageIndex());
  }

  callback = () => {
    let newIndex = getNewIndexFunc();
    activateIndicator(newIndex);
    setAttr(imgCarousel, 'src', images[newIndex]);
  };

  return () => setInterval(callback, delay);
};

const leftInterval = intervalSlider('left');
const rightInterval = intervalSlider('right');

let left = null,
  right = null;

arrowLeft.addEventListener('click', (e) => {
  const newIndex = getArrowLeftImageIndex(getCurrentImageIndex());
  activateIndicator(newIndex);
  right && clearInterval(right);
  if (!left) {
    left = leftInterval();
  }
  setAttr(imgCarousel, 'src', images[newIndex]);
});

arrowRight.addEventListener('click', (e) => {
  const newIndex = getArrowRightImageIndex(getCurrentImageIndex());
  activateIndicator(newIndex);

  left && clearInterval(left);
  if (!right) {
    right = rightInterval();
  }
  setAttr(imgCarousel, 'src', images[newIndex]);
});
