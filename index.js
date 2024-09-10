console.clear();

const toggleButton = document.querySelector('[data-js="toggle-mode-button"]');

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); // Toggle die Dark Mode Klasse
});
