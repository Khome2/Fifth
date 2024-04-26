let currentSlide = 0;

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0){
        currentSlide = 
        document.querySelectorAll('.slide').length -1;
    }
    updateSlide();
}

function nextSlide() {
    currentSlide++;
    if(currentSlide >=
    document.querySelectorAll('.slide').length){
        currentSlide = 0;
    }
    updateSlide();
}

function updateSlide() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.slide.opacity = index === currentSlide ? 1 : 0;
    });
}

updateSlide();