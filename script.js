var userName = "";

var start_button = document.getElementById("start_button");

var timerInterval;

var secondsLeft = 60;

var questionsContainerEl = document.getElementById("questions_container");

var questionsEl = document.getElementById("questions");

var quizTimer = document.getElementById("timer");

var answerButton = document.getElementById("answer_button");

var currentQuestionIndex = "";

var answerCount = 0;

var userScore = document.getElementById("userScore");

var submitScore = document.getElementById("submitName");

var displayScore = document.getElementById("display-score");

var highScoreBtn = document.getElementById("high-score-btn");


var questions = [
  {
    question: "What do you call an animal that has more than 5 toes/fingers on thier paws?",
    answers: [
      { A: "Multidigital" },
      { B: "Polydactyl" },
      { C: "Twotoomany" },
    ],
    Answer: "B, Polydactyl",
  },
  {
    question: "Which of the following traits are true about cats?",
    answers: [
      { A: "They are heat seekers"},
      { B: "Cats will sleep on average 16 -20 hours per day"},
      { C: "Felines are true carnivores - they need protein in order to live" },
      { D: "All the above" },
    ],
    Answer: "D, All the above are true!",
  },
  {
    question: "What is the purpose of whiskers on a dog or cat?",
    answers: [
      { A: "They are ornimental/they serve no real purpose" },
      { B: "Whiskers can be used as weapons when the animal is feeling threatened" },
      { C: "They help a dog or cat identify and interact with thier surrounding environment" },
    ],
    Answer: "C, they are extra sensory equipment for the animal",
  },
  {
    question: "Has your dog ever had Kennel Cough?, What is Kennel Cough?",
    answers: [
      { A: "A highly contagious disease caused by being in close proximity to other infected dogs" },
      { B: "Seasonal allergies making your dog cough that occur with too much time spent outdoors" },
      { C: "A disease caused by either a virus or bacteria. With it's main telltale symptom as a persistant goose or honking cough" },
    ],
    Answer: "Both A and C",
  },
  {
    question: "Is it better to have a cat or dog as a family member?",
    answers: [
      { A: "Only cats because dogs slobber too much" },
      { B: "Depends on your personality and that of the animal" },
      { C: "Definately dogs, cats are too temperamental" },
    ],
    Answer: "B, They are both wonderful!!!",
  },
];



function startQuiz() {
  setTime();
  displayScore.classList.add("hide");
  start_button.classList.add("hide");
  questionsContainerEl.classList.remove("hide");
  currentQuestionIndex = 0;
  correctAnswerCount = 0;
  setNextQuestion();
}



function nextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}



	function questionDisplay(question) {
	  questionEl.innerText = question.question;
	  question.answers.forEach(function (answer) {
	   
	    var button = document.createElement("button");
	    
	    button.innerText = answer.answer;
	    button.addEventListener("click", selectAnswer);
	    answerButtons.appendChild(button);
	  });
	  
	}
	

	function resetState() {
	  answerButtons.innerHTML = "";
	}





function questionsCarousel(event) {
  var selectButton = event.target;
  console.log(selectButton.textContent);

  console.log(questions[currentQuestionIndex].correctAnswer);

  if (
    selectButton.textContent == questions[currentQuestionIndex].correctAnswer
  ) {
    correctAnswerCount += 5;
  } else {
    secondsLeft = secondsLeft - 10;
    
      console.log(correctAnswerCount);
  }

  if (questions.length > currentQuestionIndex + 1) {
    currentQuestionIndex++;
    setNextQuestion();
    console.log(currentQuestionIndex);
  } else {
    GameOver();
  }
}












