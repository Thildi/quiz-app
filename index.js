console.clear();

document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const toggleButton = document.querySelector('[data-js="toggle-mode-button"]');

  // Überprüfe, ob der Dark Mode Toggle Button vorhanden ist
  if (toggleButton) {
    console.log("Dark mode toggle button gefunden.");

    // Prüfe und wende den gespeicherten Dark Mode Status an
    if (localStorage.getItem("dark-mode") === "enabled") {
      document.body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", () => {
      // Toggle der Dark Mode Klasse
      document.body.classList.toggle("dark-mode");
      console.log("Dark mode umgeschaltet.");

      // Speichere den aktuellen Status in localStorage
      if (document.body.classList.contains("dark-mode")) {
        console.log("Dark mode ist jetzt aktiviert.");
        localStorage.setItem("dark-mode", "enabled");
      } else {
        console.log("Dark mode ist jetzt deaktiviert.");
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

document.addEventListener("DOMContentLoaded", function () {
  const answerButtons = document.querySelectorAll('[data-js="answer-button"]');

  console.log("Buttons gefunden:", answerButtons.length); // Prüfe, ob Buttons gefunden wurden

  answerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const answerDiv = this.nextElementSibling;

      console.log("Clicked Button:", button); // Überprüfe, ob der Button-Click funktioniert
      console.log("Answer Div:", answerDiv); // Überprüfe, ob das richtige Div ausgewählt wurde

      // Umschalten der "visible"-Klasse
      answerDiv.classList.toggle("visible");
      console.log(
        "Visible class toggled:",
        answerDiv.classList.contains("visible")
      ); // Überprüfe, ob die Klasse richtig gesetzt wird
    });
  });
});
