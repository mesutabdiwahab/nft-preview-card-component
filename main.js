// select .card-image, .overlay;
const cardImage = document.querySelector('.card-image');
const overLay = document.querySelector('.overlay');

// add .open-overlay
function handleMouseEnter() {
  return overLay.classList.add('open-overlay');
}

//remove the added class
function handleMouseLeave() {
  return overLay.classList.remove('open-overlay');
}

// listen mouseenter, mousemove;
cardImage.addEventListener('mouseenter', handleMouseEnter);

cardImage.addEventListener('mouseleave', handleMouseLeave)