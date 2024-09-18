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
// Warten, bis der DOM vollständig geladen ist, bevor der Code ausgeführt wird
document.addEventListener("DOMContentLoaded", function () {
  // Wähle alle Elemente mit dem Attribut data-js="bookmark-button" aus
  const bookmarkButtons = document.querySelectorAll(
    '[data-js="bookmark-button"]'
  );

  // Durchlaufe jedes gefundene Element (Bookmark-Button)
  bookmarkButtons.forEach((button) => {
    // Füge einen Event-Listener für das 'click'-Ereignis hinzu
    button.addEventListener("click", function () {
      // Finde das <i>-Element innerhalb des Buttons
      const icon = this.querySelector("i");

      // Überprüfe, ob das <i>-Element die Klasse "fa-regular" hat
      if (icon.classList.contains("fa-regular")) {
        // Wenn die Klasse vorhanden ist, entferne sie und füge "fa-solid" hinzu
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      } else {
        // Andernfalls entferne "fa-solid" und füge "fa-regular" hinzu
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
      }
    });
  });
});
