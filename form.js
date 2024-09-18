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

const setupCharacterCount = (formSelector, textareaIds, maxLength) => {
  const form = document.querySelector(formSelector);
  const updateCount = (textarea, countElement) =>
    (countElement.textContent = `${
      maxLength - textarea.value.length
    } Zeichen übrig`);

  const resetFunctions = textareaIds.map((id) => {
    const textarea = document.getElementById(id);
    const countElement = document.querySelector(
      `.char-count[data-for="${id}"]`
    );

    textarea.addEventListener("input", () =>
      updateCount(textarea, countElement)
    );
    updateCount(textarea, countElement);

    return () => {
      textarea.value = "";
      updateCount(textarea, countElement);
    };
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Formular wurde abgesendet");
    resetFunctions.forEach((reset) => reset());
  });
};

setupCharacterCount("form", ["question", "answer"], 150);
