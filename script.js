const questions = [
  {
      question: "What do you call an animal that has more than 5 toes/fingers on thier paws?",
      choices: ["a. Multidigital", "b. Polydactyl", "c. Twotoomany"],
      answer: "b. Polydactyl"
  },
  {
      question: "Has your dog ever had Kennel Cough?, What is Kennel Cough?",
      choices: ["a. A highly contagious disease caused by being in close proximity to other infected dogs", "b. Seasonal allergies making your dog cough that occur with too much time spent outdoors", "c. A disease caused by either a virus or bacteria. With it's main telltale symptom as a persistant goose or honking cough", "d. Both A and C"],
      answer: "d. Both A and C"
  },
  {
      question: "What is the purpose of whiskers on a dog or cat?",
      choices: ["a. They are ornimental/they serve no real purpose", "b. Whiskers can be used as weapons when the animal is feeling threatened" , "c. They help a dog or cat identify and interact with thier surrounding environment"],
      answer: "c. They help a dog or cat identify and interact with thier surrounding environment"
  },
  {
      question: "Which of the following traits are true about cats?",
      choices: ["a. They are heat seekers", "b. Cats will sleep on average 16 -20 hours per day" , "c. Felines are true carnivores - they need protein in order to live", "d. All the above are true"],
      answer: "d. All the above are true"
  },
  {
      question: "Is it better to have a cat or dog as a family member?",
      choices: ["a. Only cats because dogs slobber too much", "b. They're both wonderful. It depends on your personality and that of the animal", "c. Definately dogs, cats are too temperamental"],
      answer: "b. They're both wonderful. It depends on your personality and that of the animal"
  },

];

// Set constant references to elements
var questionIndex = 0;
var timeLeft = document.getElementById("timeLeft");
var initialInput = document.getElementById("initialInput");
var questionDiv = document.getElementById("questionDiv");
var startDiv = document.getElementById("start");
var timer = document.getElementById("timer");
var timesUp = document.getElementById("timesUp");
var questionTitle = document.getElementById("questionTitle");
var answerCheck = document.getElementById("answerCheck");
var startQuizBtn = document.getElementById("start-quiz-button");
var base = document.getElementById("base");

var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

// Variables
var questionNum = 0;
var scoreResult;
var correctAns = 0;


// WHEN I click the start button, timer starts
var totalTime = 91;
function newQuiz() {
  questionIndex = 0;
  totalTime = 90;
  timeLeft.textContent = totalTime;
  initialInput.textContent = "";

  startDiv.style.display = "none";
  questionDiv.style.display = "block";
  timer.style.display = "block";
  timesUp.style.display = "none";

  var startTimer = setInterval(function() {
      totalTime--;
      timeLeft.textContent = totalTime;
      if(totalTime <= 0) {
          clearInterval(startTimer);
          if (questionIndex < questions.length - 1) {
              gameOver();
          }
      }
  },1000);

  showQuiz();
};

// console.log(questions[questionIndex].question);
// console.log(questions[questionIndex].choices);

startQuizBtn.addEventListener("click", newQuiz);

function showQuiz() {
  nextQuestion();
}

function nextQuestion() {
  questionTitle.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].choices[0];
  choiceB.textContent = questions[questionIndex].choices[1];
  choiceC.textContent = questions[questionIndex].choices[2];
  choiceD.textContent = questions[questionIndex].choices[3];
}

console.log(nextQuestion);

// Show user if correct or wrong
function checkAnswer(answer) {

  var lineBreak = document.getElementById("lineBreak");
  lineBreak.style.display = "block";
  answerCheck.style.display = "block";

  if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
      // correct answer = 1 score to final score
      correctAns++;
      console.log(correctAns);
      answerCheck.textContent = "Correct!";
  } else {
      // wrong answer = deduct 10 second from timer
      totalTime -= 10;
      timeLeft.textContent = totalTime;
      answerCheck.textContent = "Incorrect - The correct answer is: " + questions[questionIndex].answer;
  }

  questionIndex++;
  // Iterate through questions 
  if (questionIndex < questions.length) {
      nextQuestion();
  } else {
      // if no more questions, gameOver =>
      gameOver();
  }
}

// After all questions are answered or timer reaches 0, "Game over"
function gameOver() {
  summary.style.display = "block";
  questionDiv.style.display = "none";
  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "block";

  // show final score
  finalScore.textContent = correctAns;
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }


// Prompt for user initials and local storage
function storeHighScores(event) {
  event.preventDefault();

  if (initialInput.value === "") {
      alert("Please enter your initials!");
      return;
  }
  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  highScoreSection.style.display = "block";   
// store scores into local storage
var savedHighScores = localStorage.getItem("high scores");
var scoresArray;

if (savedHighScores === null) {
    scoresArray = [];
} else {
    scoresArray = JSON.parse(savedHighScores)
}

var userScore = {
    initials: initialInput.value,
    score: finalScore.textContent
  };
}

// console.log(userScore);
// scoresArray.push(userScore);

// "stringify" array in order to store in local
var scoresArrayString = JSON.stringify(scoresArray);
window.localStorage.setItem("high scores", scoresArrayString);

// Current highscores
showHighScores();


// Shows high scores
var i = 0;
function showHighScores() {

  startDiv.style.display = "none";
  timer.style.display = "none";
  questionDiv.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  highScoreSection.style.display = "block";

  var savedHighScores = localStorage.getItem("high scores");

  // check if there is any in local storage
  if (savedHighScores === null) {
      return;
  }
  console.log(savedHighScores);

  var storedHighScores = JSON.parse(savedHighScores);

  for (; i < storedHighScores.length; i++) {
      var eachNewHighScore = document.createElement("p");
      eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
      listOfHighScores.appendChild(eachNewHighScore);
  }
}

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function(event) { 
  storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
  showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
  startDiv.style.display = "block";
  highScoreSection.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function() {
  window.localStorage.removeItem("high scores");
  listOfHighScores.innerHTML = "High Scores Cleared!";
  listOfHighScores.setAttribute("style", "font-family: sans-serif; font-style: italic;")
});
