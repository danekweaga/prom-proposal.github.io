document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("rsvp-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const response = document.getElementById("response").value;
        
        if (response === "yes") {
            thankYouMessage.innerHTML = "<p>Yay! I'm so excited to go to prom with you!</p>";
        } else {
            thankYouMessage.innerHTML = "<p>Oh ok.........</p>";
        }

        thankYouMessage.classList.remove("hidden");
    });
});
