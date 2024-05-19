document.addEventListener('DOMContentLoaded', () => {
    const rsvpForm = document.getElementById('rsvp-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const yesResponse = document.getElementById('yes-response');
    const slideshowMusic = document.getElementById('slideshow-music');

    rsvpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const response = document.getElementById('response').value;
        thankYouMessage.classList.remove('hidden');
        if (response === 'yes') {
            yesResponse.classList.remove('hidden');
            startSlideshow();
            slideshowMusic.play();
            startFloatingBubbles();
        }
    });

    let slideIndex = 0;
    const slides = document.querySelectorAll('.mySlides');

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('prev-slide', 'next-slide');
            if (index === slideIndex) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });

        const prevIndex = (slideIndex - 1 + slides.length) % slides.length;
        const nextIndex = (slideIndex + 1) % slides.length;

        slides[prevIndex].style.display = 'block';
        slides[nextIndex].style.display = 'block';
        slides[prevIndex].classList.add('prev-slide');
        slides[nextIndex].classList.add('next-slide');
    }

    function plusSlides(n) {
        slideIndex = (slideIndex + n + slides.length) % slides.length;
        showSlides();
    }

    function startSlideshow() {
        const slideshowContainer = document.querySelector('.slideshow-container');
        slideshowContainer.style.display = 'block';
        showSlides();
    }

    function startFloatingBubbles() {
        const textBubbles = document.querySelectorAll('.text-bubble');
        textBubbles.forEach((bubble) => {
            bubble.style.top = `${Math.random() * 80 + 10}%`;
            bubble.style.left = `${Math.random() * 80 + 10}%`;
        });
    }

    window.plusSlides = plusSlides;
});
