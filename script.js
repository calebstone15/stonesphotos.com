console.log("Stones Photos site loaded!");

// Robust, idempotent EmailJS init
(function initEmailJS() {
	// Security Note: The User ID (Public Key) is visible in client-side code.
	// Ensure "Origin Verification" is enabled in the EmailJS dashboard
	// to restrict usage to your specific domain (stonesphotos.com).
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

function validateForm(data) {
	const errors = {};
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

	if (!data.name) errors.name = "Name is required";
	if (!data.email || !emailRegex.test(data.email)) errors.email = "Valid email is required";
	// Phone is optional, but if provided, should be valid-ish
	if (data.phone && !phoneRegex.test(data.phone)) errors.phone = "Invalid phone format";
	if (!data.interest) errors.interest = "Please select an interest";
	if (!data.message) errors.message = "Message is required";

	return {
		isValid: Object.keys(errors).length === 0,
		errors
	};
}

function setLoadingState(form, isLoading) {
	const submitBtn = form.querySelector('button[type="submit"]');
	if (isLoading) {
		submitBtn.disabled = true;
		submitBtn.dataset.originalText = submitBtn.textContent;
		submitBtn.textContent = 'Sending...';
	} else {
		submitBtn.disabled = false;
		submitBtn.textContent = submitBtn.dataset.originalText || 'Send Message';
	}
}

function showMessage(element, message, type) {
	element.style.display = 'block';
	element.style.color = type === 'success' ? '#2193b0' : '#d32f2f';
	element.textContent = message;
}

function handleFormSubmit(event) {
	event.preventDefault();
	const form = event.target;
	const formMessage = document.getElementById('form-message');

	const formData = {
		name: document.getElementById('name').value.trim(),
		email: document.getElementById('email').value.trim(),
		phone: document.getElementById('phone').value.trim(),
		interest: document.getElementById('interest').value,
		message: document.getElementById('message').value.trim()
	};

	// 1. Validation
	const validation = validateForm(formData);
	if (!validation.isValid) {
		// Simple alert for now, or you could map errors to specific fields if UI supports it
		// Ideally, clear previous errors first
		let errorMsg = "Please fix the following errors:\n" + Object.values(validation.errors).join("\n");
		showMessage(formMessage, errorMsg, 'error');
		return;
	}

	// 2. UI State
	setLoadingState(form, true);
	formMessage.style.display = 'none';

	// 3. API Call
	// Pass public key as 4th arg as a fallback in case init wasn't effective
	emailjs.send("service_0hcl68q", "template_3codtcb", formData, "x0pDGPnrMj7xD0fSb")
		.then(function() {
			showMessage(formMessage, 'Message sent successfully! I’ll get back to you soon.', 'success');
			form.reset();
		})
		.catch(function(error) {
			showMessage(formMessage, 'Failed to send message. Please try again or contact me directly.', 'error');
			console.error('EmailJS error:', error);
		})
		.finally(function() {
			setLoadingState(form, false);
		});
}

document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('contact-form');

	if (form) {
		form.addEventListener('submit', handleFormSubmit);
	}
});
