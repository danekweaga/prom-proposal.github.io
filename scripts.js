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
        }
    });

    let slideIndex = 0;
    const slides = document.querySelectorAll('.mySlides');

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    function startSlideshow() {
        showSlides();
    }
});
