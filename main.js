const form = document.querySelector(".form");
const header = document.querySelector(".header");
const scoreMarkerContainer = document.querySelector(".score-marker-container");
const scoreMarker = document.querySelector(".score-marker");
const correctAnswers = ["B", "D", "A", "D"];

form.addEventListener("submit", event => {
  event.preventDefault();

  let score = 0;

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  userAnswers.forEach((userAnswer, index) => {
    const isAnswerCorrect = userAnswer === correctAnswers[index];

    if (isAnswerCorrect) {
      score += 25;
    }
  });

  scoreMarkerContainer.classList.remove("hidden");

  setTimeout(() => {
    header.scrollIntoView({ behavior: "smooth" });
  }, 200);

  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }

    scoreMarker.textContent = `${counter}%`;

    counter++;
  }, 20);
});
