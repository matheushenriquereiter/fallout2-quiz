const header = document.querySelector(".header");
const form = document.querySelector(".form");
const finalScoreContainer = document.querySelector(".final-score-container");
const finalScore = document.querySelector(".final-score");
const correctAnswers = ["B", "D", "A", "D"];

let score = 0;

const getUserAnswers = () => {
  const userAnswers = correctAnswers.map((_, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value;

    return userAnswer;
  });

  return userAnswers;
};

const resetScore = () => {
  score = 0;
};

const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index];

    if (isUserAnswerCorrect) {
      score += 25;
    }
  });
};

const animateFinalResult = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }

    finalScore.textContent = `${counter++}%`;
  }, 20);
};

const showFinalScore = () => {
  finalScoreContainer.classList.remove("hidden");
  header.scrollIntoView({ behavior: "smooth" });
};

const handleSubmit = event => {
  event.preventDefault();

  const userAnswers = getUserAnswers();

  resetScore();
  calculateUserScore(userAnswers);
  showFinalScore();
  animateFinalResult();
};

form.addEventListener("submit", handleSubmit);
