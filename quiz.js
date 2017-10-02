'use strict';

const quizQuestions = [ 
  {question: 'How many planets are there in our solar system?',
    correct: 0,
    answers: ['eight', 'nine', 'thirteen', 'six']},
  {question: 'Of the four inner planets, which is biggest?',
    correct: 3,
    answers: ['Mars', 'Saturn', 'Venus', 'Earth']},
  {question: 'Which planet in our solar system has rings?',
    corect: 3,
    answers: ['Jupiter', 'Saturn', 'Uranus', 'all of the above']},
  {question: 'What was the first planet to be discovered with a telescope?',
    correct: 0,
    answers: ['Uranus', 'Saturn', 'Mercury', 'Neptune']},
  {question: 'How many exoplanets (planets orbiting stars other than our Sun) have we discovered?',
    correct: 0,
    answers: ['3600', '4200', '58', 'none']},
  {question: 'Which planet was discovered through mathematical calculations rather than with a telescope?',
    correct: 2,
    answers: ['Europa', 'Pluto', 'Neptune', 'Mercury']},
  {question: 'Which of the four Galilean moons is most likely to harbor life in its subsurface oceans?',
    correct: 1,
    answers: ['Io', 'Europa', 'Ganimede', 'Callisto']},
  {question: 'Which of the four Galilean moons is the biggest?',
    correct: 2,
    answers: ['Io', 'Europa', 'Ganimede', 'Callisto']},
  {question: 'On which planet is the solar system\'s largest volcano, Olympus Mons, located?',
    correct: 0,
    answers: ['Mars', 'Venus', 'Jupiter', 'Earth']},
  {question: 'Jupiter\'s Great Red Spot is a gigantic hurricane bigger than Earth. How long has it been raging?',
    correct: 3,
    answers: ['3 months', '18 months', 'a year', '350 years']},
];

const STORE = {
  view: 'intro',
  questions: [{}, {}, {}, {}, {}],
  choice: null,
  currentQuestion: null,
  correctResponses: null,
};

function shuffle(arr) {
  for (let i = arr.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }

  return arr;
}

function selectRandomQuestions() {
  let randomQuestions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  shuffle(randomQuestions);

  randomQuestions = randomQuestions.splice(0, 5);

  console.log(randomQuestions);
}

function render() {
  if (STORE.view === 'intro') {
    console.log('Intro');
    renderIntro();
  }

  else if (STORE.view === 'questions') {
    console.log('questions');
    renderQuestions();
  }

  else if (STORE.view === 'results') {
    console.log('results');
    renderResults();
  }
}

function renderIntro() {}

function renderQuestions() {}

function renderQuestionsFeedback() {}

function renderResults() {}

function resetQuiz() {}

function main() { 
  render();

}

$(main);