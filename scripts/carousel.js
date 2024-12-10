const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function showImage() {
    const offset = -index * images[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1;
    showImage();
});

nextButton.addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    showImage();
});
