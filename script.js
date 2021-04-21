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
var answers = document.querySelectorAll("li");
var section = document.querySelector(".questions");
var intro = document.querySelector("#intro");
var count = 0;
var questions = [{
    questionNumber: "Question #1",
    questionTitle: "Commonly used Data Types do not include:",
    firstAnswer: "Strings",
    secondAnswer: "Booleans",
    thirdAnswer: "Alerts",
    fourthAnswer: "Numbers",
    correctAnswer: "Alerts",
},

{
    questionNumber: "Question #2",
    questionTitle: "The condition in an if/else statement is enclosed within: _______.",
    firstAnswer: "Quotes",
    secondAnswer: "Curly Brackets",
    thirdAnswer: "Parenthesis",
    fourthAnswer: "Square Brackets",
    correctAnswer: "Parenthesis",
},
{
    questionNumber: "Question #3",
    questionTitle: "Arrays in Javascript can be used to store _______.",
    firstAnswer: "Numbers and Strings",
    secondAnswer: "Other arrays",
    thirdAnswer: "Booleans",
    fourthAnswer: "All the above",
    correctAnswer: "All the above",
},
{
    questionNumber: "Question #4",
    questionTitle: "String values must be enclosed within _______ when being assigned to variables.",
    firstAnswer: "Commas",
    secondAnswer: "Curly brackets",
    thirdAnswer: "Quotes",
    fourthAnswer: "Parenthesis",
    correctAnswer: "Quotes",
},
{
    questionNumber: "Question #5",
    questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
    firstAnswer: "JavaScript",
    secondAnswer: "Terminal/bash",
    thirdAnswer: "For Loops",
    fourthAnswer: "Console.log",
    correctAnswer: "Console.log",
}]

startBtn.addEventListener("click", function () {
    //hide intro page
    intro.style.display = "none";
    //update values in sections
    displayQuestions ();
}
)


function displayQuestions() {
    var questionNumber = document.querySelector(".questionNumber");
    var questionTitle = document.querySelector(".questionTitle");
    var firstAnswer = document.querySelector(".firstAnswer");
    var secondAnswer = document.querySelector(".secondAnswer");
    var thirdAnswer = document.querySelector(".thirdAnswer");
    var fourthAnswer = document.querySelector(".fourthAnswer");
    var correctAnswer = questions[count].correctAnswer;

    questionNumber.textContent = questions[count].questionNumber;
    questionTitle.textContent = questions[count].questionTitle;

}








