import { allQuestions, getGameQuestions } from './questionsDB.js';

// DOM selection

const questionText = document.querySelector('.question');
const userAnswer = document.querySelector('.user-answer');
const skipButton = document.querySelector('.skip');
const userForm = document.querySelector('.user-form');

const letters = document.querySelectorAll('.letter');

const showQuestion = (allIndexes, currentIndex, gameQuestions) => {
  letters.forEach((letter) => letter.classList.remove('active'));
  letters[allIndexes[currentIndex]].classList.add('active');
  userAnswer.value = '';
  questionText.innerText = gameQuestions[allIndexes[currentIndex]].question;
};

const playGame = () => {
  const gameQuestions = getGameQuestions(allQuestions);
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let allIndexes = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26,
  ];
  let currentIndex = 0;

  skipButton.addEventListener('click', () => {
    if (currentIndex >= allIndexes.length - 1) {
      currentIndex = 0;
      return showQuestion(allIndexes, currentIndex, gameQuestions);
    }
    currentIndex++;
    return showQuestion(allIndexes, currentIndex, gameQuestions);
  });

  userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (
      userAnswer.value.toLowerCase() ===
      gameQuestions[allIndexes[currentIndex]].answer
    ) {
      gameQuestions[allIndexes[currentIndex]].status = 1;
      letters[allIndexes[currentIndex]].classList.toggle('correct-answer');
      allIndexes.splice(currentIndex, 1);
      correctAnswers++;
      return showQuestion(allIndexes, currentIndex, gameQuestions);
    }
    if (
      userAnswer.value.toLowerCase() !==
      gameQuestions[allIndexes[currentIndex]].answer
    ) {
      gameQuestions[allIndexes[currentIndex]].status = 0;
      letters[allIndexes[currentIndex]].classList.toggle('wrong-answer');
      allIndexes.splice(currentIndex, 1);
      wrongAnswers++;
      return showQuestion(allIndexes, currentIndex, gameQuestions);
    }
  });

  showQuestion(allIndexes, currentIndex, gameQuestions);
};

playGame();
