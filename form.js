/*-----------------------SUBMIT-NEW-CARD-IMPLEMENTATION----------------------*/

const form = document.querySelector('[data-js="add-question-form"]');
const fieldset = document.querySelector('[data-js="fieldset"]');

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Verhindere das Standard-Submit-Verhalten

  // Lese die eingegebenen Daten aus den Formularfeldern
  const question = document.querySelector('[data-js="question"]').value.trim();
  const answer = document.querySelector('[data-js="answer"]').value.trim();
  const tags = document.querySelector('[data-js="tags"]').value.trim();

  if (question && answer) {
    // Erstelle den HTML-String für die Karte
    let tagsHTML = "";
    if (tags) {
      tagsHTML = tags
        .split(",")
        .map((tag) => `<span class="tag">${tag.trim()}</span>`)
        .join("");
    }

    const cardHTML = `
      <article class="question-card">
        <button 
          class="bookmark-button" 
          data-js="bookmark-button"
          aria-label="Zu Lesezeichen hinzufügen"
          title="Zu Lesezeichen hinzufügen"
        >
          <i class="fa-regular fa-bookmark fa-2xl"></i>
        </button>
        <h2 class="question-text">${question}</h2>
        <button 
          class="show-answer"
          data-js="answer-button"
          aria-label="Antwort"
          title="Zeige die Antwort"
        >
          Antwort
        </button>
        <div class="answer" data-js="answer">
          <p class="answer-text">${answer}</p>
        </div>
        <div class="tags" aria-label="Schlagwort">
          ${tagsHTML}
        </div>
      </article>
    `;

    // Füge die neue Karte direkt unter dem Fieldset ein
    fieldset.insertAdjacentHTML("afterend", cardHTML);

    // Füge Event-Listener für den Toggle-Button hinzu
    const cardContainer = fieldset.nextElementSibling;
    const toggleButton = cardContainer.querySelector(
      '[data-js="answer-button"]'
    );
    const answerDiv = cardContainer.querySelector('[data-js="answer"]');

    toggleButton.addEventListener("click", function () {
      answerDiv.classList.toggle("visible");
      toggleButton.textContent = answerDiv.classList.contains("visible")
        ? "Antwort verstecken"
        : "Antwort";
      toggleButton.setAttribute(
        "title",
        answerDiv.classList.contains("visible")
          ? "Verstecke die Antwort"
          : "Zeige die Antwort"
      );
    });

    // Füge Event-Listener für den Bookmark-Button hinzu
    const bookmarkButton = cardContainer.querySelector(
      '[data-js="bookmark-button"]'
    );
    bookmarkButton.addEventListener("click", function () {
      const icon = this.querySelector("i");

      // Icon-Klasse umschalten zwischen "fa-regular" und "fa-solid"
      if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        icon.style.color = "#74c0fc"; // Farbe ändern, falls gewünscht
        this.setAttribute("aria-label", "Von Lesezeichen entfernen");
        this.setAttribute("title", "Von Lesezeichen entfernen");
      } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        icon.style.color = ""; // Farbe zurücksetzen
        this.setAttribute("aria-label", "Zu Lesezeichen hinzufügen");
        this.setAttribute("title", "Zu Lesezeichen hinzufügen");
      }
    });

    // Setze das Formular zurück
    form.reset();
  }
});
/*-----------------------COUNT-CHARTACTERS-IMPLEMENTATION---------------------*/

// Funktion, um die verbleibende Zeichenanzahl zu aktualisieren
function updateCharacterCount(textarea, countElement, maxLength) {
  // Berechne die verbleibenden Zeichen
  const remaining = maxLength - textarea.value.length;

  // Aktualisiere den Textinhalt des countElement mit der verbleibenden Zeichenanzahl
  countElement.textContent = `${remaining} Zeichen übrig`;
}

// Funktion, um den Event-Handler für die Textareas zu setzen
function attachCharacterCountHandler(textareaId, maxLength) {
  // Hole das Textarea-Element anhand der übergebenen ID
  const textarea = document.getElementById(textareaId);

  // Hole das Element, das die Zeichenanzahl anzeigen soll, anhand der übergebenen ID
  const countElement = document.querySelector(
    `.char-count[data-for="${textareaId}"]`
  );

  // Initial die Zeichenanzahl für das Textarea aktualisieren
  updateCharacterCount(textarea, countElement, maxLength);

  // Event-Listener hinzufügen, der bei jedem 'input'-Ereignis die Zeichenanzahl aktualisiert
  textarea.addEventListener("input", () => {
    updateCharacterCount(textarea, countElement, maxLength);
  });
}

// Setze den Event-Handler für das Textarea mit der ID 'question' und einer maximalen Länge von 150 Zeichen
attachCharacterCountHandler("question", 150);

// Setze den Event-Handler für das Textarea mit der ID 'answer' und einer maximalen Länge von 150 Zeichen
attachCharacterCountHandler("answer", 150);
