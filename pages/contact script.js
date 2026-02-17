/**
 * 1. Visitor Tracking
 */
async function setupVisitorInfo() {
    console.log("Fetching visitor info...");
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('IP API failed');

        const data = await response.json();
        
        const ipField = document.getElementById('form-ip');
        const locField = document.getElementById('form-location');
        const devField = document.getElementById('form-device');

        if (ipField) ipField.value = data.ip || "Unknown IP";
        if (locField) locField.value = `${data.city || 'Unknown'}, ${data.country_name || 'Unknown'}`;
        if (devField) devField.value = navigator.userAgent;

        console.log("Visitor data populated.");
    } catch (error) {
        console.warn("Tracking error (Safe to ignore locally):", error.message);
    }
}

/**
 * 2. Hamburger Logic
 */
 const hamburger = document.getElementById('hamburger');
 const navLinks = document.getElementById('nav-links');
 
 

// Hamburger open/close
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

/**
 * 3. Form Submission Handling
 */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.onsubmit = async (e) => {
        e.preventDefault();
        const status = document.getElementById('form-status');
        const formData = new FormData(contactForm);
        
        status.innerHTML = "Sending...";
        status.style.color = "#555";

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                status.innerHTML = "Success! I'll contact you soon.";
                status.style.color = "black";
                contactForm.reset();
            } else {
                status.innerHTML = "Oops! Something went wrong.";
                status.style.color = "red";
            }
        } catch (err) {
            status.innerHTML = "Connection error.";
            status.style.color = "red";
        }
    };
}

document.addEventListener('DOMContentLoaded', setupVisitorInfo);