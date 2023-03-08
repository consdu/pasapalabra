import { allQuestions, getGameQuestions } from './questionsDB.js';

// DOM selection

const questionText = document.querySelector('.question');
const userAnswer = document.querySelector('.user-answer');
const submitButton = document.querySelector('.submit');
const skipButton = document.querySelector('.skip');
const userForm = document.querySelector('.user-form');

const letters = document.querySelectorAll('.letter');

const showQuestion = (currentIndex, gameQuestions) => {
  userAnswer.value = '';
  questionText.innerText = gameQuestions[currentIndex].question;
};

const playGame = () => {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let skippedAnswers = [];
  let currentIndex = 0;
  const gameQuestions = getGameQuestions(allQuestions);

  skipButton.addEventListener('click', () => {
    letters[currentIndex].classList.toggle('active');
    skippedAnswers.push(currentIndex);
    currentIndex++;
    console.log(skippedAnswers);
    return showQuestion(currentIndex, gameQuestions);
  });

  userForm.addEventListener('submit', (event) => {
    console.log('submit');
    event.preventDefault();
    if (userAnswer.value.toLowerCase() === gameQuestions[currentIndex].answer) {
      if (currentIndex === 26) {
        currentIndex = 0;
      }
      gameQuestions[currentIndex].status = 1;
      letters[currentIndex].classList.toggle('correct-answer');
      currentIndex++;
      correctAnswers++;
      return showQuestion(currentIndex, gameQuestions);
    }
    if (userAnswer.value.toLowerCase() !== gameQuestions[currentIndex].answer) {
      gameQuestions[currentIndex].status = 0;
      letters[currentIndex].classList.toggle('wrong-answer');
      currentIndex++;
      wrongAnswers++;
      console.log(gameQuestions);
      return showQuestion(currentIndex, gameQuestions);
    }
  });

  showQuestion(currentIndex, gameQuestions);
};

playGame();
