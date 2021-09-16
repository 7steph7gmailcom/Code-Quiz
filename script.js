const questions = [
  {
      question: "What do you call an animal that has more than 5 toes/fingers on thier paws?",
      choices: ["a. Multidigital", "b. Polydactyl", "c. Twotoomany"],
      answer: "b. Polydactyl"
  },
  {
      question: "Has your dog ever had Kennel Cough?, What is Kennel Cough?",
      choices: ["a. A highly contagious disease caused by being in close proximity to other infected dogs", "b. Seasonal allergies making your dog cough that occur with too much time spent outdoors", "c. A disease caused by either a virus or bacteria. With it's main telltale symptom as a persistant goose or honking cough"],
      answer: "Both A and C"
  },
  {
      question: "What is the purpose of whiskers on a dog or cat?",
      choices: ["a. They are ornimental/they serve no real purpose", "b. Whiskers can be used as weapons when the animal is feeling threatened" , "c. They help a dog or cat identify and interact with thier surrounding environment"],
      answer: "c.  They are extra sensory equipment for the animal"
  },
  {
      question: "Which of the following traits are true about cats?",
      choices: ["a. They are heat seekers", "b.Cats will sleep on average 16 -20 hours per day" , "c. Felines are true carnivores - they need protein in order to live", "d. All the above"],
      answer: "d. All the above are true"
  },
  {
    question: "Is it better to have a cat or dog as a family member?",
    choices: ["a. Only cats because dogs slobber too much", "b. Depends on your personality and that of the animal", "c. Definately dogs, cats are too temperamental"],
    answer: "b. They are both wonderful. You need to find which one you're compatible with!!!"
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

