const familyCarousel = document.getElementById('carousel-container');
const track = document.getElementById('carousel-track');

const clone = track.cloneNode(true);
track.appendChild(clone);

let scrollAmount = 0;
let isPaused = false;

function scrollCarousel() {
    if (!isPaused) {
        scrollAmount += 1;
        familyCarousel.scrollLeft = scrollAmount;

        if (scrollAmount >= track.scrollWidth/2) {
            scrollAmount = 0;
            familyCarousel.scrollLeft = 0;
        }
    }
}