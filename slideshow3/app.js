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
  const imageURL = getAttr(imgCarousel, 'src');
  return getImageIndex(imageURL);
};

const getNextLeftImageIndex = (currentIndex) => {
  return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
};

const getNextRightImageIndex = (currentIndex) => {
  return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
};

const activateIndicator = (index) => {
  for (let indicator of indicators) {
    if (indicator.classList.contains('active')) {
      indicator.classList.remove('active');
    }

    if (indicator === index) indicator.classList.add('active');
  }
};

const intervalSlider = (direction, interval = 1000) => {
  let callback = null,
    getNewIndexFunc = null,
  
  if (direction === 'left') {
    getNewIndexFunc = () => getNextLeftImageIndex(getCurrentImageIndex())
  } else {
    getNewIndexFunc = () => getNextRightImageIndex(getCurrentImageIndex())
  }

  const callback = () => {
    let newIndex = getNewIndexFunc();
    activateIndicator(newIndex);
    setAttr(imgCarousel, 'src', images[newIndex]);
  }

  return () => setInterval(callback, interval);

}


const leftInterval = intervalSlider('left');
const rightInterval = intervalSlider('right');

let left = null, right = null;

arrowLeft.addEventListener('click', (e) => {
  const newIndex = getNextLeftImageIndex(getCurrentImageIndex());
  activateIndicator(newIndex);
  right && clearInterval(right);
  if (!left) {
    left = leftInterval();
  }
  setAttr(imgCarousel, images[newIndex])
})

arrowRight.addEventListener('click', (e) => {
  const newIndex = getNextLeftImageIndex(getCurrentImageIndex());
  activateIndicator(newIndex);
  left && clearInterval(left);
  if (!right) {
    right = leftInterval();
  }
  setAttr(imgCarousel, images[newIndex])
})