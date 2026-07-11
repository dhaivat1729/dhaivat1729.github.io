// Smooth scrolling for anchor links.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

  const toggleBtn = document.getElementById("toggleDarkModeBtn");
  if (!toggleBtn) return;

  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
};

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleDarkModeBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleDarkMode);
  }
});
