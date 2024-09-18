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

/* -------------------------SHOW-AND-HIDE-ANSWER-BUTTON-IMPLEMENTATION------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const answerButtons = document.querySelectorAll('[data-js="answer-button"]');

  answerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const answerDiv = this.nextElementSibling;

      // Umschalten der "visible"-Klasse
      answerDiv.classList.toggle("visible");

      if (answerDiv.classList.contains("visible")) {
        this.textContent = "Antwort verstecken";
      } else {
        this.textContent = "Antwort";
      }
    });
  });
});

/*----------------------------BOOKMARK-TOGGLE-IMPLEMENTATION---------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const bookmarkButtons = document.querySelectorAll(
    '[data-js="bookmark-button"]'
  );

  bookmarkButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const icon = this.querySelector("i");

      // Icon-Klasse umschalten zwischen "fa-regular" und "fa-solid"
      if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        icon.style.color = "#74c0fc"; // Farbe ändern, falls gewünscht
      } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        icon.style.color = ""; // Farbe zurücksetzen
      }
    });
  });
});
