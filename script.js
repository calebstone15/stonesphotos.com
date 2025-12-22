console.log("Stones Photos site loaded!");

// Robust, idempotent EmailJS init
(function initEmailJS() {
	if (!window.__EMAILJS_INITIALIZED__) {
		if (window.emailjs && typeof window.emailjs.init === 'function') {
			try {
				// Use string signature for widest compatibility
				emailjs.init("x0pDGPnrMj7xD0fSb");
				window.__EMAILJS_INITIALIZED__ = true;
				console.log("EmailJS initialized in script.js");
			} catch (e) {
				console.error("EmailJS init failed:", e);
			}
		} else {
			console.error("EmailJS SDK not loaded before init.");
		}
	}
})();

function handleFormSubmit(event) {
	event.preventDefault();
	const form = event.target;
	const formMessage = document.getElementById('form-message');

	// Disable button to prevent multiple submissions
	const submitBtn = form.querySelector('button[type="submit"]');
	submitBtn.disabled = true;
	submitBtn.textContent = 'Sending...';

	const formData = {
		name: document.getElementById('name').value.trim(),
		email: document.getElementById('email').value.trim(),
		phone: document.getElementById('phone').value.trim(),
		interest: document.getElementById('interest').value,
		message: document.getElementById('message').value.trim()
	};

	// Pass public key as 4th arg as a fallback in case init wasn't effective
	emailjs.send("service_0hcl68q", "template_3codtcb", formData, "x0pDGPnrMj7xD0fSb")
		.then(function() {
			formMessage.style.display = 'block';
			formMessage.style.color = '#2193b0';
			formMessage.textContent = 'Message sent successfully! I’ll get back to you soon.';
			form.reset();
			submitBtn.disabled = false;
			submitBtn.textContent = 'Send Message';
		}, function(error) {
			formMessage.style.display = 'block';
			formMessage.style.color = '#d32f2f';
			formMessage.textContent = 'Failed to send message. Please try again or contact me directly.';
			submitBtn.disabled = false;
			submitBtn.textContent = 'Send Message';
			console.error('EmailJS error:', error);
		});
}

document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('contact-form');

	if (form) {
		form.addEventListener('submit', handleFormSubmit);

		// Inline validation logic
		const inputs = form.querySelectorAll('input, select, textarea');
		inputs.forEach(input => {
			input.addEventListener('blur', () => validateField(input));
			input.addEventListener('input', () => {
				// Only clear error on input if it was previously invalid
				const errorId = input.getAttribute('aria-describedby');
				if (errorId && document.getElementById(errorId).style.display === 'block') {
					validateField(input);
				}
			});
		});

		function validateField(input) {
			const errorId = input.getAttribute('aria-describedby');
			if (!errorId) return;

			const errorEl = document.getElementById(errorId);
			let isValid = input.checkValidity();

			// Custom validation for required fields that might be empty
			if (input.hasAttribute('required') && !input.value.trim()) {
				isValid = false;
			}

			if (!isValid) {
				errorEl.style.display = 'block';
				input.setAttribute('aria-invalid', 'true');
				input.style.borderColor = '#e74c3c';
			} else {
				errorEl.style.display = 'none';
				input.setAttribute('aria-invalid', 'false');
				input.style.borderColor = ''; // Restore original color
			}
			return isValid;
		}
	}
});
