const familyCarousel = document.getElementById('carousel-container');
const track = document.getElementById('carousel-track');

const clone = track.cloneNode(true);
track.appendChild(clone);