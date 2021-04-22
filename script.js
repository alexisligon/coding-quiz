//============PSEUDOCODE=========//

//AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//when the start button is pressed, the timer begins counting down and the first question appears
//when a selection is made, the next question appears, a small message displays whether your selection was correct or wrong
// if a wrong selection is made, ten seconds are deducted from the time 
//when the quiz is over, display ALL DONE and final score as time left and form for initials and high score
//submit initials and high score to storage to display

var timer = 0;
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

//questions as objects in an array
var questions = [{
    questionNumber: "Question #1",
    questionTitle: "Commonly used Data Types do not include:",
    firstAnswer: "1.Strings",
    secondAnswer: "2.Booleans",
    thirdAnswer: "3.Alerts",
    fourthAnswer: "4.Numbers",
    correctAnswer: "3.Alerts",
},

{
    questionNumber: "Question #2",
    questionTitle: "The condition in an if/else statement is enclosed within: _______.",
    firstAnswer: "1.Quotes",
    secondAnswer: "2.Curly Brackets",
    thirdAnswer: "3.Parenthesis",
    fourthAnswer: "4.Square Brackets",
    correctAnswer: "3.Parenthesis",
},
{
    questionNumber: "Question #3",
    questionTitle: "Arrays in Javascript can be used to store _______.",
    firstAnswer: "1.Numbers and Strings",
    secondAnswer: "2.Other arrays",
    thirdAnswer: "3.Booleans",
    fourthAnswer: "4.All the above",
    correctAnswer: "4.All the above",
},
{
    questionNumber: "Question #4",
    questionTitle: "String values must be enclosed within _______ when being assigned to variables.",
    firstAnswer: "1.Commas",
    secondAnswer: "2.Curly brackets",
    thirdAnswer: "3.Quotes",
    fourthAnswer: "4.Parenthesis",
    correctAnswer: "3.Quotes",
},
{
    questionNumber: "Question #5",
    questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
    firstAnswer: "1.JavaScript",
    secondAnswer: "2.Terminal/bash",
    thirdAnswer: "3.For Loops",
    fourthAnswer: "4.Console.log",
    correctAnswer: "4.Console.log",
}]

startBtn.addEventListener("click", function () {
    //hide intro page
    intro.style.display = "none";
    //update values in sections
    displayQuestions ();
}
)

//function to display next question
function displayQuestions() {
    
    questionNumber.textContent = questions[count].questionNumber;
    questionTitle.textContent = questions[count].questionTitle;
    firstAnswer.textContent = questions[count].firstAnswer;
    secondAnswer.textContent = questions[count].secondAnswer;
    thirdAnswer.textContent = questions[count].thirdAnswer;
    fourthAnswer.textContent = questions[count].fourthAnswer;
    
};

//variable for all answer buttons
var firstBtn = document.querySelector("#firstChoice");
var secondBtn = document.querySelector("#secondChoice");
var thirdBtn = document.querySelector("#thirdChoice");
var fourthBtn = document.querySelector("#fourthChoice");

//event listener for all buttons to proceed to next question
var i = 0, length = allBtn.length
for (i; i < length; i++){
allBtn[i].addEventListener("click", function() {

    count++;
    displayQuestions();
})
}
