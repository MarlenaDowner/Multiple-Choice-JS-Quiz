//varibles for quiz

let currentQuestionIndex = 0;
let time = question.length * 13;
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
    let currentQuestion = questions[currentQuestionIndex];

    let titleElement = document.getElementById("question-title");

    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index) {
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index + 1}. ${choice}`

        choiceButton.addEventListener("click", questionClick);

        choicesElement.append(choiceButton);
    }
    
    )
    
}

function questionClick(){

}

function quizEnd(){
    clearInterval(timerID);

    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class", "hide");
}


function clockTick(){
    time--;
    timerElement.textContent = time;

    if (time <= 0){
        quizEnd();
    }

}




function startQuiz(){
    let startScreenElement = document.getElementById("start-screen");
    
    startScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick, 1000);

    timerElement.textContent = time;

    getQuestion();
    
}




function saveHighScore(){

}

function checkForEnter(event){

}


///----------------------------------------------------------------------
//adds the event listers because there is a button that needs to be clicked

//start button
//submit button
//Enter initials


startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);