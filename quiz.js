'use strict';

const quizQuestions = [ 
  {question: 'How many planets are there in our solar system?',
    correct: 0,
    answers: ['eight', 'nine', 'thirteen', 'six']},
  {question: 'Of the four inner planets, which is biggest?',
    correct: 3,
    answers: ['Mars', 'Saturn', 'Venus', 'Earth']},
  {question: 'Which planet in our solar system has rings?',
    correct: 3,
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
  currentQuestion: 0,
  correctResponses: 0,
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

  let questionArr =randomQuestions.splice(0, 5);

  for (let i = 0; i < questionArr.length; i++) {
    STORE.questions[i] = (quizQuestions[questionArr[i]]);
  }

  STORE.view = 'questions';

  render();
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

function renderIntro() {
  $('.js-container').html(`<h1>Space Quiz!</h1>
  <p class="intro">Hey, there! Ready to see how much you know about our solar system and beyond? Go ahead and 
    click the button to get started. You'll have to answer five multiple choice questions, 
    without skipping the tough ones. When you're finished, click the button to move on and see if 
    you got it right. At the end, we'll tell you how well you did.<br><br>Have fun!</p>
  <button class="start-quiz" id="start-quiz">START</button>`);
  $('.js-container').on('click', '.start-quiz', function() {
    STORE.view = 'questions';
    

    selectRandomQuestions();

  });
}

function renderQuestions() {
  $('.js-container').children().remove();
  
  // let thisQuestions = selectRandomQuestions();
  // console.log(thisQuestions);

  // for (let i = 0; i < thisQuestions.length; i++) {
  //   STORE.questions[i] = (quizQuestions[thisQuestions[i]]);
  // }


  console.log(STORE.questions);

  $('.js-container').html(`
    <p>${STORE.currentQuestion+1.+')'} ${STORE.questions[STORE.currentQuestion].question}</p>
    <label class='answer'>
    <input val="0" type="radio" name="choice" required>
    <span>${STORE.questions[STORE.currentQuestion].answers[0]}</span>
    </label>
  <br>
  
    <label class='answer'>
      <input val="1" type="radio" name="choice" required>
      <span>${STORE.questions[STORE.currentQuestion].answers[1]}</span>
    </label>
    <br>
  
    <label class='answer'>
      <input val="2" type="radio" name="choice" required>
      <span>${STORE.questions[STORE.currentQuestion].answers[2]}</span>
    </label>
    <br>
  
    <label class='answer'>
      <input val="3" type="radio" name="choice" required>
      <span>${STORE.questions[STORE.currentQuestion].answers[3]}</span>
    </label>
    <br>
      
    <button type="submit" id="submit" class="js-question-submit" data-popup-open="popup-feedback">Submit</button>`);
    
  
}

function handeleSubmit() {
  $('.js-container').on('click', '.js-question-submit', function(event) {
    const userChoice = parseInt($('input[name=choice]:checked').attr('val'));
    console.log(userChoice);
    console.log(typeof(userChoice));
    //Call this fucntion to check if the result is correct, THIS IS WHERE WE LEFT OFF YESTERDAY
    checkAnswer(userChoice);
  });
  
}

function checkAnswer(choice) {

  let correctAnswerObject = STORE.questions[STORE.currentQuestion];
  console.log(correctAnswerObject);
  let correctAnswer = correctAnswerObject.correct;
  console.log(correctAnswer);
  let feedback = $('.popup');
  
  if (choice === correctAnswer) {

    STORE.correctResponses++;
    STORE.currentQuestion++;
    $('.popup').addClass('show');
    feedback.find('h2').text('Correct!');
    feedback.find('img').attr('src', 'https://media.giphy.com/media/26FPnsRww5DbqoPuM/giphy.gif');
    
  } else if ($('input[name=choice]:checked').length === 0) {
    
    $('.popup').addClass('show');
    feedback.find('h2').text('MAKE A DECISION');
    feedback.find('img').attr('src', 'https://media.giphy.com/media/OmAdpbVnAAWJO/giphy.gif');
    
  } else if (choice !== correctAnswer) {
    
    STORE.currentQuestion++; 
    $('.popup').addClass('show');
    feedback.find('h2').text('Sorry, that wasn\'t correct.');
    feedback.find('img').attr('src', 'https://media.giphy.com/media/sgfauo9CqBcAw/giphy.gif');
    
  }
  
  
  if (STORE.currentQuestion === STORE.questions.length) {
    STORE.view === 'results';
    renderResults();
  } else {
    renderQuestions();
  }
}

function handleAnswerFeedback() {
  
  $('#submit-answer').on('click', function (e) {
    let targetPopupClass = $(this).attr('data-popup-open');
    e.preventDefault();
  });
  
  $('#close-feedback-modal').on('click', function (e) {
    let targetPopupClass = $(this).attr('data-popup-close');


    e.preventDefault();
  });
}

     
function renderResults() {
  $('.js-container').children().remove();
  $('.js-container').html(`<h2 class="result">Your score: ${STORE.correctResponses} out of ${STORE.questions.length} right</h2>
  <button class="start-over" id="start-over">Start Quizz Over</button>`);
   
}

function resetQuiz() {
  STORE.currentQuestion = 0;
  STORE.correctResponses = 0;
  STORE.view = 'intro';
  renderIntro();
}

function handleResetQuiz() {
  $('.js-container').on('click', '.start-over', function(event) {
    resetQuiz();
  });
}

function toggleX() {
  $('#x').on('click', '.popup-close', function(event) {
    console.log('toggleX ran');
    $('.popup').removeClass('show')
  });
}

function main() { 
  render();
  handeleSubmit();
  handleResetQuiz();
  handleAnswerFeedback();
  toggleX();
}

$(main);