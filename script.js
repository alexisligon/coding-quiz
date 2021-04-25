var startBtn = document.querySelector("#starter");
var submitBtn = document.querySelector("#submit");
var tryAgainBtn = document.querySelector("#try-again");
var clearBtn = document.querySelector("#clear");
var section = document.querySelector(".questions"); //section on html where questions block is displayed
var intro = document.querySelector("#intro"); //intro section
var count = 0; //declares array to start at 0;
var questionNumber = document.querySelector(".questionNumber");//section for question number
var questionTitle = document.querySelector(".questionTitle");//section for actual question
var firstAnswer = document.querySelector("#firstChoice");//section for answer selections
var secondAnswer = document.querySelector("#secondChoice");
var thirdAnswer = document.querySelector("#thirdChoice");
var fourthAnswer = document.querySelector("#fourthChoice");
var correctAnswer;
var message = document.querySelector("#message");
var allBtn = document.querySelectorAll(".choices");
var timerCount = 60;
var timer = document.querySelector("#timer");
var score = document.getElementById("score");//final score
var final = document.getElementById("final");//section for after quiz
var timerInterval;
//variable for all answer buttons
var firstBtn = document.querySelector("#firstChoice");
var secondBtn = document.querySelector("#secondChoice");
var thirdBtn = document.querySelector("#thirdChoice");
var fourthBtn = document.querySelector("#fourthChoice");

//questions as objects in an array
var questions = [{
    questionNumber: "Question #1",
    questionTitle: "Commonly used Data Types do not include:",
    firstAnswer: "1.Strings",
    secondAnswer: "2.Booleans",
    thirdAnswer: "3.Alerts",
    fourthAnswer: "4.Numbers",
    correctAnswer: "3",
},

{
    questionNumber: "Question #2",
    questionTitle: "The condition in an if/else statement is enclosed within: _______.",
    firstAnswer: "1.Quotes",
    secondAnswer: "2.Curly Brackets",
    thirdAnswer: "3.Parenthesis",
    fourthAnswer: "4.Square Brackets",
    correctAnswer: "3",
},
{
    questionNumber: "Question #3",
    questionTitle: "Arrays in Javascript can be used to store _______.",
    firstAnswer: "1.Numbers and Strings",
    secondAnswer: "2.Other arrays",
    thirdAnswer: "3.Booleans",
    fourthAnswer: "4.All the above",
    correctAnswer: "4",
},
{
    questionNumber: "Question #4",
    questionTitle: "String values must be enclosed within _______ when being assigned to variables.",
    firstAnswer: "1.Commas",
    secondAnswer: "2.Curly brackets",
    thirdAnswer: "3.Quotes",
    fourthAnswer: "4.Parenthesis",
    correctAnswer: "3",
},
{
    questionNumber: "Question #5",
    questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
    firstAnswer: "1.JavaScript",
    secondAnswer: "2.Terminal/bash",
    thirdAnswer: "3.For Loops",
    fourthAnswer: "4.Console.log",
    correctAnswer: "4",
}]

//start of quiz
startBtn.addEventListener("click", function () {
    //hide intro page
    intro.style.display = "none";
    final.style.display = "none";
    //update values in sections
    displayQuestions();
    startTimer();
}
)

//function to display next question
function displayQuestions() {
    if (count < questions.length) { //displays all questions within index
        questionNumber.textContent = questions[count].questionNumber;
        questionTitle.textContent = questions[count].questionTitle;
        firstAnswer.textContent = questions[count].firstAnswer;
        secondAnswer.textContent = questions[count].secondAnswer;
        thirdAnswer.textContent = questions[count].thirdAnswer;
        fourthAnswer.textContent = questions[count].fourthAnswer;
    }
    else {//if over index, hide questions section and display final score and initials form
        clearInterval(timerInterval);
        timer.style.display = "none";
        section.style.display = "none";
        final.style.display = "inline-block";
        score.textContent = (timerCount);
    }

};


//event listener for all buttons to proceed to next question
//also to compare if the user clicked the right answer or wrong answer
var i = 0, length = allBtn.length
for (i; i < length; i++) {
    allBtn[i].addEventListener("click", function () {
        var correct = questions[count].correctAnswer//grabs the correct answer from the object

        if (correct === this.getAttribute('data-id')) {//compares correct answer to answer selected
            message.textContent = ("correct!");//if correct, display correct

        } else {
            message.textContent = ("incorrect");//else subtract ten seconds and display incorrect
            timerCount = timerCount - 10;
        }

        count++;//go to next object in array and display next question
        displayQuestions();
    })
}
//write a function for the timer
function startTimer() {
    timerInterval = setInterval(function () {
        timerCount--;
        timer.textContent = (timerCount);

        if (timerCount === 0) {
            clearInterval(timerInterval);
            timer.textContent = (timerCount);
            // gameOver ();
        }

    }, 1000)
};

var initialsInput = document.getElementById("initials");//input of initials
var scoreForm = document.getElementById("scoreForm");//entire form
var highScores = document.getElementById("scoreSection");//entire section of scores list display
var scoreList = document.getElementById("scoreList");//list element




//highscore form with initials submission
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    final.style.display = "none";//hide form
    highScores.style.display = "inline-block";//show scores list
    saveScore();
})

function saveScore() {

    var user = {
        initials: initialsInput.value,
        score: timerCount,
    }

    localStorage.setItem("user", JSON.stringify(user));

    var lastScore = JSON.parse(localStorage.getItem("user"));

    if (lastScore !== null) {
        scoreList.textContent = (user.initials + "-" + user.score);
    }
}

function refreshPage() {
    window.location.reload();
}
tryAgainBtn.addEventListener("click", function (event) {
    event.preventDefault();
    refreshPage();
})