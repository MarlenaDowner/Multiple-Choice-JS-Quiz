//varibles for quiz

let currentQuestionIndex = 0;
let time = question.length * 10;
let timerID;

//HTML elements: link HTML elements to the functions needed
let timerElement = document.getElementById("time");
let startButton = document.getElementById("start");
let questionsElement = document.getElementById("questions");
let choicesElement = document.getElementById("choices");
let initialElement = document.getElementById("initials");
let submitButton = document.getElementById("submit");
let feedBackElement = document.getElementById("feedback");

//quiz sounds
let sfxRight = new Audio("assets/sfx/correct.wav");
let sfxWrong = new Audio("assets/sfx/incorrect.wav");

//-----------------------------------------------------------------------
//creat all the functions that are LINKED from the HTML these functions are DOING something in the quiz, later logic will be added to them
//SOME of them are button which event listner will need to be used see below

// function startQuiz will need a get elementById, link the HTML element and the set an atrribute class hide- this is because the CSS is hiding it 
 
function getQuestion(){
    
}

function questionClick(){

}

function startQuiz(){
    alert("hi")
}

function quizEnd(){

}

function clockTick(){

}


function saveHighScore(){

}

function checkForEnter(event){

}


///----------------------------------------------------------------------
//adds the event listers because there is a button that needs to be clicked

//submit button
//Enter initials
//start button

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);