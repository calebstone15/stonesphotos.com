console.log("Stones Photos site loaded!");

// Initialize EmailJS with your public key
(function() {
    emailjs.init({
        publicKey: "x0pDGPnrMj7xD0fSb",
    });
    console.log("EmailJS initialized globally");
})();

document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling (contact.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Contact form submitted");

            // Disable button to prevent multiple submissions
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Get form message element
            const formMessage = document.getElementById('form-message');

            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                interest: document.getElementById('interest').value,
                message: document.getElementById('message').value.trim()
            };
            
            console.log("Sending contact form data:", formData);

            emailjs.send("service_0hcl68q", "template_3codtcb", formData)
                .then(function(response) {
                    console.log("SUCCESS!", response);
                    formMessage.style.display = 'block';
                    formMessage.style.color = '#2193b0';
                    formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                }, function(error) {
                    console.log("FAILED...", error);
                    formMessage.style.display = 'block';
                    formMessage.style.color = '#d32f2f';
                    formMessage.textContent = 'Failed to send message. Please try again or contact me directly.';
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                    console.error('EmailJS error:', error);
                });
        });
    }
    
    // Booking form handling (bookings.html)
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Booking form submitted");
            
            // Validation logic remains in bookings.html
            // This just handles the EmailJS submission
            
            // Get necessary elements
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            
            // Create the parameters object for EmailJS
            const templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                shoot_type: document.getElementById('shoot-type').value,
                preferred_date: document.getElementById('preferred-date').value,
                alternative_date: document.getElementById('alternative-date').value || "Not provided",
                location: document.getElementById('location').value,
                notes: document.getElementById('notes').value || "No additional notes"
            };
            
            console.log("Sending booking data:", templateParams);
            
            // Send the email using EmailJS - NOTE THE CORRECT TEMPLATE ID FROM YOUR SCREENSHOT
            emailjs.send('service_0hcl68q', 'template_31tqjn8', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Thank you for your booking request! I will contact you within 24-48 hours to confirm your booking.');
                    bookingForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('There was an error sending your booking request. Please try again or contact me directly. Error: ' + error.text);
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.textContent = "Submit Booking Request";
                    submitBtn.disabled = false;
                });
        });
    }
});