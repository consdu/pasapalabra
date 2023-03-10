import { allQuestions, getGameQuestions } from './questionsDB.js';

const correctAnswerAudio = new Audio('correct-answer.mp3');
const wrongAnswerAudio = new Audio('wrong-answer.mp3');
const skipQuestionAudio = new Audio('skip-question.mp3');

// DOM selection

const questionText = document.querySelector('.question');
const userAnswer = document.querySelector('.user-answer');
const skipButton = document.querySelector('.skip');
const gameForm = document.querySelector('.game-form');
const userNameInput = document.querySelector('.user-name');
const startForm = document.querySelector('.start-form');
const startWrapper = document.querySelector('.start-wrapper');
const gameWrapper = document.querySelector('.game-wrapper');
const resultsWrapper = document.querySelector('.results-wrapper');
const usersList = document.querySelector('.users-list');

const letters = document.querySelectorAll('.letter');
const scoreBoard = [];
let userName;

const showQuestion = (allIndexes, currentIndex, gameQuestions, score) => {
  if (allIndexes.length === 0) {
    gameWrapper.classList.add('hide-wrapper');
    scoreBoard.push({
      name: userName,
      points: score.correctAnswers,
    });

    const currentUsers = scoreBoard
      .map((user) => {
        return `<li>${user.name} - ${user.points} points</li>`;
      })
      .join('');

    usersList.innerHTML = currentUsers;
    resultsWrapper.classList.remove('hide-wrapper');
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
    skipQuestionAudio.play();
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

    // if (currentIndex > allIndexes.length - 1) {
    //   console.log(currentIndex);
    //   currentIndex = 0;
    //   console.log(allIndexes, gameQuestions[allIndexes[currentIndex]]);
    //   console.log('here');
    // }

    if (allIndexes.length === 0) {
      return showQuestion(allIndexes, currentIndex, gameQuestions, score);
    }
    if (
      userAnswer.value.toLowerCase() ===
      gameQuestions[allIndexes[currentIndex]].answer
    ) {
      correctAnswerAudio.play();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      gameQuestions[allIndexes[currentIndex]].status = 1;
      letters[allIndexes[currentIndex]].classList.toggle('correct-answer');
      allIndexes.splice(currentIndex, 1);
      score.correctAnswers++;
      if (currentIndex > allIndexes.length - 1) {
        currentIndex = 0;
      }
      return showQuestion(allIndexes, currentIndex, gameQuestions, score);
    }

    if (
      userAnswer.value.toLowerCase() !==
      gameQuestions[allIndexes[currentIndex]].answer
    ) {
      wrongAnswerAudio.play();
      gameQuestions[allIndexes[currentIndex]].status = 0;
      letters[allIndexes[currentIndex]].classList.toggle('wrong-answer');
      allIndexes.splice(currentIndex, 1);
      console.log(allIndexes);
      score.wrongAnswers++;

      if (currentIndex > allIndexes.length - 1) {
        currentIndex = 0;
      }

      return showQuestion(allIndexes, currentIndex, gameQuestions, score);
    }
  });

  showQuestion(allIndexes, currentIndex, gameQuestions, score);
};

startForm.addEventListener('submit', (event) => {
  event.preventDefault();
  userName = userNameInput.value;
  userNameInput.innerText = '';
  startWrapper.classList.add('hide-wrapper');
  gameWrapper.classList.remove('hide-wrapper');
  playGame();
});
