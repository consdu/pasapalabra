import { allQuestions, getGameQuestions } from "./questionsDB.js";

const correctAnswerAudio = new Audio("./sounds/correct-answer.mp3");
const wrongAnswerAudio = new Audio("./sounds/wrong-answer.mp3");
const skipQuestionAudio = new Audio("./sounds/skip-question.mp3");
const winAudio = new Audio("./sounds/final-sound.mp3");
const gameRunning = new Audio("./sounds/game-music.mp3");
const gameOver = new Audio("./sounds/game-over.mp3");

gameRunning.volume = 0.7;

const questionText = document.querySelector(".question");
const userAnswer = document.querySelector(".user-answer");
const skipButton = document.querySelector(".skip");
const resetButton = document.querySelector(".reset-score");
const playAgainButton = document.querySelector(".play-again");
const gameForm = document.querySelector(".game-form");
const userNameInput = document.querySelector(".user-name");
const userNameText = document.querySelector(".user-name-text");
const userNameWrapper = document.querySelector(".user-name-wrapper");
const startForm = document.querySelector(".start-form");
const informationSection = document.querySelector(".information-section");
const startWrapper = document.querySelector(".start-wrapper");
const gameWrapper = document.querySelector(".game-wrapper");
const resultsWrapper = document.querySelector(".results-wrapper");
const usersList = document.querySelector(".users-list");
const timerText = document.querySelector(".timer");

const letters = document.querySelectorAll(".letter");
const scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) ?? [];
let userName;

const showConfetti = () => {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};

const getQuestion = (allIndexes, currentIndex, gameQuestions, score) => {
  userAnswer.focus();

  if (gameQuestions.every((gameQuestion) => gameQuestion.status === 1)) {
    winAudio.play();
    showConfetti();
  }

  if (allIndexes.length === 0) {
    timerText.remove();
    gameRunning.pause();

    if (gameQuestions.some((question) => question.status === 0)) {
      gameOver.play();
    }

    gameWrapper.classList.add("hide");

    document.querySelector(".letters-section").remove();

    scoreBoard.push({
      name: userName,
      points: score.correctAnswers,
    });

    localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));

    scoreBoard.sort((a, b) => b.points - a.points);

    const currentUsers = scoreBoard
      .map((user) => {
        return `<li>${user.name} - ${user.points} points</li>`;
      })
      .slice(0, 10)
      .join("");

    usersList.innerHTML = currentUsers;
    informationSection.classList.add("full-width");
    resultsWrapper.classList.remove("hide");
    letters.forEach((letter) => letter.classList.remove("active"));
    return;
  }

  letters.forEach((letter) => letter.classList.remove("active"));
  letters[allIndexes[currentIndex]].classList.add("active");
  userAnswer.value = "";
  questionText.innerText = gameQuestions[allIndexes[currentIndex]].question;
};

const playGame = () => {
  const startTimer = () => {
    gameRunning.play();

    let timerLength = 180;
    timerText.innerText = timerLength;

    const timer = setInterval(() => {
      if (timerLength < 0) {
        gameOver.play();
        clearInterval(timer);
        allIndexes.length = 0;
        return getQuestion(allIndexes, currentIndex, gameQuestions, score);
      }
      timerText.innerText = timerLength;
      timerLength--;
    }, 1000);
  };

  startTimer();

  const gameQuestions = getGameQuestions(allQuestions);
  const score = {
    correctAnswers: 0,
    wrongAnswers: 0,
  };
  let allIndexes = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25,
  ];
  let currentIndex = 0;

  skipButton.addEventListener("click", () => {
    skipQuestionAudio.play();
    if (allIndexes.length === 0) return;
    if (currentIndex >= allIndexes.length - 1) {
      currentIndex = 0;
      return getQuestion(allIndexes, currentIndex, gameQuestions, score);
    }
    currentIndex++;
    return getQuestion(allIndexes, currentIndex, gameQuestions, score);
  });

  gameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (allIndexes.length === 0) {
      return getQuestion(allIndexes, currentIndex, gameQuestions, score);
    }
    if (
      userAnswer.value.toLowerCase() ===
      gameQuestions[allIndexes[currentIndex]].answer
    ) {
      correctAnswerAudio.play();
      gameQuestions[allIndexes[currentIndex]].status = 1;
      letters[allIndexes[currentIndex]].classList.toggle("correct-answer");
      allIndexes.splice(currentIndex, 1);
      score.correctAnswers++;
      if (currentIndex > allIndexes.length - 1) {
        currentIndex = 0;
      }
      return getQuestion(allIndexes, currentIndex, gameQuestions, score);
    }

    if (
      userAnswer.value.toLowerCase() !==
      gameQuestions[allIndexes[currentIndex]].answer
    ) {
      wrongAnswerAudio.play();
      gameQuestions[allIndexes[currentIndex]].status = 0;
      letters[allIndexes[currentIndex]].classList.toggle("wrong-answer");
      allIndexes.splice(currentIndex, 1);
      score.wrongAnswers++;

      if (currentIndex > allIndexes.length - 1) {
        currentIndex = 0;
      }

      return getQuestion(allIndexes, currentIndex, gameQuestions, score);
    }
  });

  getQuestion(allIndexes, currentIndex, gameQuestions, score);
};

startForm.addEventListener("submit", (event) => {
  event.preventDefault();
  userName = userNameInput.value;
  userNameInput.innerText = "";
  startWrapper.classList.add("hide");
  gameWrapper.classList.remove("hide");
  userNameText.innerText = userName;
  userNameWrapper.classList.remove("hide");
  timerText.classList.remove("hide");
  playGame();
});

resetButton.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

playAgainButton.addEventListener("click", () => {
  location.reload();
});

userNameInput.focus();
