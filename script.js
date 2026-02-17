// --- Navigation Logic ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const postMenu = document.getElementById('post-menu');
const postSubmenu = document.getElementById('post-submenu');
const arrow = document.querySelector('.arrow');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

if (postMenu && postSubmenu) {
    postMenu.addEventListener('click', (e) => {
        e.preventDefault();
        postSubmenu.classList.toggle('show');
        if(arrow) arrow.classList.toggle('rotate');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('dropbtn')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});


// --- Instagram Counter Logic ---
async function updateIGStats() {
    const webAppURL = "https://script.google.com/macros/s/AKfycbwNI9OizA7RhvowMH10IKZNcqH1okeNJa7_24QMfXXLmS-B-bj5EUkJ5PLnk4Ac0-0OAA/exec";
    
    try {
        const response = await fetch(webAppURL);
        const data = await response.json();
        const finalCount = parseInt(data.followers);
        const counterElement = document.getElementById('ig-counter');
        
        if (counterElement && !isNaN(finalCount)) {
            runFastCounter(counterElement, 0, finalCount, 1500);
        }
    } catch (err) {
        console.error("Could not fetch IG data", err);
        const counterElement = document.getElementById('ig-counter');
        if(counterElement) counterElement.innerText = "1.5K+"; 
    }
}

function runFastCounter(el, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        el.innerText = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

// --- Initialize Everything ---
document.addEventListener('DOMContentLoaded', () => {
    // IG Counter එක විතරක් run වෙන්න දානවා
    updateIGStats();
});