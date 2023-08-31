document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Simulate form submission with a delay
        setTimeout(function() {
            responseMessage.textContent = 'Thank you for your message!';
            contactForm.reset();
        }, 1000); // 1000 milliseconds = 1 second
    });
});