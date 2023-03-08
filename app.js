import { allQuestions, getGameQuestions } from './questionsDB.js';

// DOM selection

const questionText = document.querySelector('.question');
const userAnswer = document.querySelector('.user-answer');
const skipButton = document.querySelector('.skip');
const gameForm = document.querySelector('.game-form');

const letters = document.querySelectorAll('.letter');

const showQuestion = (allIndexes, currentIndex, gameQuestions, score) => {
  if (allIndexes.length === 0) {
    alert(score.correctAnswers, score.wrongAnswers);
    return;
  }
  letters.forEach((letter) => letter.classList.remove('active'));
  letters[allIndexes[currentIndex]].classList.add('active');
  userAnswer.value = '';
  questionText.innerText = gameQuestions[allIndexes[currentIndex]].question;
};

const playGame = () => {
  const gameQuestions = getGameQuestions(allQuestions);
  const score = {
    correctAnswers: 0,
    wrongAnswers: 0,
  };
  let allIndexes = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26,
  ];
  let currentIndex = 0;

  skipButton.addEventListener('click', () => {
    if (allIndexes.length === 0) return;
    if (currentIndex >= allIndexes.length - 1) {
      currentIndex = 0;
      return showQuestion(allIndexes, currentIndex, gameQuestions, score);
    }
    currentIndex++;
    return showQuestion(allIndexes, currentIndex, gameQuestions, score);
  });

  gameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (allIndexes.length === 0) return;
    if (
      userAnswer.value.toLowerCase() ===
      gameQuestions[allIndexes[currentIndex]].answer
    ) {
      gameQuestions[allIndexes[currentIndex]].status = 1;
      letters[allIndexes[currentIndex]].classList.toggle('correct-answer');
      allIndexes.splice(currentIndex, 1);
      score.correctAnswers++;
      return showQuestion(allIndexes, currentIndex, gameQuestions, score);
    }
    if (
      userAnswer.value.toLowerCase() !==
      gameQuestions[allIndexes[currentIndex]].answer
    ) {
      gameQuestions[allIndexes[currentIndex]].status = 0;
      letters[allIndexes[currentIndex]].classList.toggle('wrong-answer');
      allIndexes.splice(currentIndex, 1);
      score.wrongAnswers++;
      return showQuestion(allIndexes, currentIndex, gameQuestions, score);
    }
  });

  showQuestion(allIndexes, currentIndex, gameQuestions, score);
};

playGame();
