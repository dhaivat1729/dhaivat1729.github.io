// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});

// Toggle dark/light mode
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Change the icon based on the current mode
    const toggleBtn = document.getElementById("toggleDarkModeBtn");
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️'; // Sun icon for light mode
    } else {
        toggleBtn.textContent = '🌙'; // Moon icon for dark mode
    }
};

// Modal functionality
const openModal = () => {
    document.getElementById("myModal").style.display = "block";
};
const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
};

// Add event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("toggleDarkModeBtn").addEventListener("click", toggleDarkMode);
    document.getElementById("openModalBtn").addEventListener("click", openModal);
    document.getElementById("closeModalBtn").addEventListener("click", closeModal);
});