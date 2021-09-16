// var questionsEl = [{
//   question: "What do you call an animal that has more than 5 toes/fingers on thier paws?",
//   answers: [
//     { A: "Multidigital" },
//     { B: "Polydactyl" },
//     { C: "Twotoomany" },
//   ],
//   Answer: "B, Polydactyl",
// },
// {
//   question: "Which of the following traits are true about cats?",
//   answers: [
//     { A: "They are heat seekers"},
//     { B: "Cats will sleep on average 16 -20 hours per day"},
//     { C: "Felines are true carnivores - they need protein in order to live" },
//     { D: "All the above" },
//   ],
//   Answer: "D, All the above are true!",
// },
// {
//   question: "What is the purpose of whiskers on a dog or cat?",
//   answers: [
//     { A: "They are ornimental/they serve no real purpose" },
//     { B: "Whiskers can be used as weapons when the animal is feeling threatened" },
//     { C: "They help a dog or cat identify and interact with thier surrounding environment" },
//   ],
//   Answer: "C, they are extra sensory equipment for the animal",
// },
// {
//   question: "Has your dog ever had Kennel Cough?, What is Kennel Cough?",
//   answers: [
//     { A: "A highly contagious disease caused by being in close proximity to other infected dogs" },
//     { B: "Seasonal allergies making your dog cough that occur with too much time spent outdoors" },
//     { C: "A disease caused by either a virus or bacteria. With it's main telltale symptom as a persistant goose or honking cough" },
//   ],
//   Answer: "Both A and C",
// },
// {
//   question: "Is it better to have a cat or dog as a family member?",
//   answers: [
//     { A: "Only cats because dogs slobber too much" },
//     { B: "Depends on your personality and that of the animal" },
//     { C: "Definately dogs, cats are too temperamental" },
//   ],
//   Answer: "B, They are both wonderful!!!",
// },
// ];

// var userName = "";

// var start_button = document.getElementById("start_button");

// var timerInterval;

// var secondsLeft = 90;

// var questionsContainerEl = document.getElementById("questions_container");

// var questionsEl = document.getElementById("questions");

// var quizTimer = document.getElementById("timer");

// var answerButton = document.getElementById("answer_button");

// var currentQuestionIndex = "";

// var answerCount = 0;

// var userScore = document.getElementById("userScore");

// var submitScore = document.getElementById("userName");

// var displayScore = document.getElementById("display_score");

// var highScoreBtn = document.getElementById("high_score_btn");









// function setTime() {
//   // set timer
//   secondsLeft = 90;
//   timerInterval = setInterval(function () {
//     secondsLeft--;
//     quizTimer.textContent = secondsLeft + "seconds left";
//     if (secondsLeft === 0) {
//       // stops execution of action at interval
//       clearInterval(timerInterval);
//       // ends quiz
//       endGame();
//     }
//   }, 1000);

//   console.log(setTimer)
// }


// function startQuiz() {
//   setTime();
//   displayScore.classList.add("hide");
//   start_button.classList.add("hide");
//   questionContainerEl.classList.remove("hide");
//   currentQuestionIndex = 0;
//   answerCount = 0;
//   setNextQuestion();
// }








// function questionsCarousel(event) {
//   var selectButton = event.target;
//   console.log(selectButton.textContent);

//   console.log(questions[currentQuestionIndex].Answer);

//   if (
//     selectButton.textContent == questions[currentQuestionIndex].Answer
//   ) {
//     answerCount += 5;
//   } else {
//     secondsLeft = secondsLeft - 10;
//     console.log(questionsCarousel);
//   }

//   if (questions.length > currentQuestionIndex + 1) {
//     currentQuestionIndex++;
//     setNextQuestion();
//     console.log(currentQuestionIndex);
//   } else {
//     GameOver();
//   }
// }

// function selectAnswer(event) {
//   var selectedButton = event.target;
//   console.log(selectedButton.textContent);
//   console.log(questions[currentQuestionIndex].correctAnswer);
//   if (
//     selectedButton.textContent == questions[currentQuestionIndex].correctAnswer
//   ) {
//     correctAnswerCount += 5;
//   } else {
//     secondsLeft = secondsLeft - 10;
//   }
//   console.log(correctAnswerCount);
//   if (questions.length > currentQuestionIndex + 1) {
//     currentQuestionIndex++;
//     setNextQuestion();
//     console.log(currentQuestionIndex);
//   } else {
//     endGame();
//   }
// }






// function startQuiz() {
//   setTime();
//   displayScore.classList.add("hide");
//   start_button.classList.add("hide");
//   questionsContainerEl.classList.remove("hide");
//   currentQuestionIndex = 0;
//   answerCount = 0;
//   setNextQuestion();
// }



// function nextQuestion() {
//   resetState();
//   showQuestion(questions[currentQuestionIndex]);
// }



// 	function questionDisplay(question) {
// 	  questionsEl.innerText = question.question;
// 	  question.answers.forEach(function (answer) {
	   
// 	    var button = document.createElement("button");
	    
// 	    button.innerText = answer.answer;
// 	    button.addEventListener("click", selectAnswer);
// 	    answerButtons.appendChild(button);
// 	  });
	  
// 	}
	

// 	function resetState() {
// 	  answerButton.innerHTML = "";
// 	}


var quizQuestions = document.getElementById("quiz-questions");
	var timer = document.getElementById("timer");
	var btnStart = document.getElementById("btn-start");

	var timecounter = document.getElementById("timecounter");
	
var titleitem = document.getElementById("title-item");
	
var nextQuestions 
	
var questionanswers = document.getElementById("question-answers");
	var myScore = document.getElementById("score");
	var btnScore = document.getElementById("btnScore");
	var currentindex = 0;
	var score = 0;
	var count = 75;
	var alert =document.getElementById("alert");
	var info = document.getElementById("info");
	// var addscore = document.getElementById("addscore");
	// var submitresult = document.getElementById("submitresult");
	var allScores = [];
	var storedScores = JSON.parse(localStorage.getItem("userData"));
	var questions = [
	    {
	        title: "Commonly used data type Do Not include:---",
	        choices: ["strings","booleance","alerts", "numbers"],
	        answer : "alerts"    
	    },
	    {
	        title: "The condition in an if/else statement is enclosed within:---",
	        choices: ["quotes","Curly brackets","parentheses", "square brackets"],
	        answer : "parentheses"    
	    },
	    {
	        title: "Arrays in JavaScript can be used to store:---",
	        choices: ["numbers and strings","others Arrays","booleances", "all of the above"],
	        answer : "all of the above"    
	    },
	    {
	        title: "String values must be enclosed within --- when being assigned to variables ",
	        choices: ["commas","curly brackets","quotes","parentheses"],
	        answer : "quotes"    
	    },
	    {
	        title: "A very useful tool used during development and debugging for printing content to the debugger is:---",
	        choices: ["JavaScript","terminal/bash","alerts", "console.log"],
	        answer : "console.log"    
	    },
	]
	btnStart.addEventListener("click", starQuiz);
	function starQuiz(){
	    if(storedScores !==null) {
	        allScores = storedScores;
	    }
	    info.classList.add("d-none")
	    btnStart.classList.add("d-none")
	    timecounter.classList.remove("d-none")
	    quizQuestions.classList.remove("d-none")
	    nextQuestions= questions[currentindex]
	    console.log(nextQuestions.title)
	    
	        displayQuestion(nextQuestions)
	

	    gametime()
	}
	btnScore.addEventListener("click" , function(){
	    let name = document.getElementById("inputScore").value
	    scorePage(name, count)
	});
	// Time set
	

	function gametime(){
	

	    var timeinterval = setInterval(function(){
	        timer.innerText = count
	         count--;
	        }, 1000);
	

	}
	

	function scorePage(a, b) {
	

	    var userData = {
	        inits: a,
	        userScore: b
	    };
	    allScores.push(userData);
	

	    localStorage.setItem("userData", JSON.stringify(allScores));
	    location.href = "score.html";
	}
	

	function displayQuestion(question){
	    titleitem.innerText=question.title
	    question.choices.forEach(element => {
	     var button =document.createElement("button")
	    button.className="btn-primary btn-block text-left"
	    button.innerText=element
	    // questionanswers.innerHTML=""
	    questionanswers.appendChild(button)
	    button.addEventListener("click", displaynextQuestion)
	    });
	}
	

	

	function displaynextQuestion(e){
	    currentindex++
	    if(currentindex < questions.length){
	        correction(e.target.innerText == nextQuestions.answer)
	        questionanswers.innerHTML=""
	        if(currentindex < questions.length){    
	            nextQuestions= questions[currentindex]
	            displayQuestion(nextQuestions)  
	        }else {
	            currentindex = 0
	            displayQuestion(nextQuestions)  
	        }
	

	    }else{
	        console.log("endgame")
	        endgame()
	        
	

	    }
	    
	     
	}
	function correction(response){
	    
	    if(response){
	        alert.innerText= "Good"
	        console.log("Good")
	    }else {
	        alert.innerText="Wrong"
	        count = count -15
	        timer.innerHTML = count
	        console.log("Wrong")
	

	    }
	    setTimeout(function(){
	        alert.innerText=""
	    
	        }, 1000);
	

	}
	 function endgame (){
	    // btnStart.classList.add("d-none")
	    myScore.innaText = count
	    addscore.classList.remove("d-none")
	    timecounter.classList.add("d-none")
	    quizQuestions.classList.add("d-none")
	    addscore.classList.remove("d-none")
	

	

	 }
