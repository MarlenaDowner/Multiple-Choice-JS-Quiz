//varibles for quiz

let currentQuestionIndex = 0;
let time = question.length * 10;
let timerID;

//HTML elements; linked from the HTML code 7 in total
//link JS to HTML code
let startButton = document.getElementById("start");

//-----------------------------------------------------------------------
//creat all the functions that are LINKED from the HTML these functions are DOING something in the quiz, later logic will be added to them
//SOME of them are button which event listner will need to be used see below

// function startQuiz will need a get elementById, link the HTML element and the set an atrribute class hide- this is because the CSS is hiding it 
 

function startQuiz(){
    alert("hi")
}


///----------------------------------------------------------------------
//adds the event listers because there is a button that needs to be clicked

// submit button
//Enter initials
//start button
startButton.addEventListener("click", startQuiz);