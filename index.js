console.clear();
/*------------------DARK-MODE-IMPLEMENTATION--------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const toggleButton = document.querySelector('[data-js="toggle-mode-button"]');

  // Überprüfe, ob der Dark Mode Toggle Button vorhanden ist
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      // Toggle der Dark Mode Klasse
      document.body.classList.toggle("dark-mode");

      // Speichere den aktuellen Status in localStorage
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
      } else {
        localStorage.setItem("dark-mode", "disabled");
      }
    });
  } else {
    console.warn("Dark mode toggle button nicht gefunden.");
  }

  // Überprüfe und wende den gespeicherten Dark Mode Status an
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
});
/* -------------------------SHOW-ANSWER-BUTTON-IMPLEMENTATION------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const answerButtons = document.querySelectorAll('[data-js="answer-button"]');

  answerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const answerDiv = this.nextElementSibling;

      // Umschalten der "visible"-Klasse
      answerDiv.classList.toggle("visible");
    });
  });
});
