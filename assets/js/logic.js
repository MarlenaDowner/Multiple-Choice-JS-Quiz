// //varibles for quiz
let currentQuestionIndex = 0;
let time = questions.length * 12;
let timerID;

//link the HTML element to JS via elementID

let timerElement = document.getElementById("time");
let startButton = document.getElementById("start");
let questionsElement = document.getElementById("questions");
let choicesElement = document.getElementById("choices");
let initialElement = document.getElementById("initials");
let submitButton = document.getElementById("submit");
let feedBackElement = document.getElementById("feedback");

//sound effects on right or wrong answer

let sfxCorrect = new Audio("assets/sfx/correct.wav");
let sfxIncorrect = new Audio("assets/sfx/incorrect.wav");


//function, go through and add logic

function questionClick(){
    if(this.value !== questions[currentQuestionIndex].answer){
        time-=15;

        if(time < 0) {
            time = 0;
        }

        timerElement.textContent = time;

        feedBackElement.textContent = "Wrong";
            sfxIncorrect.play();
        } else {
            sfxCorrect.play();
        feedBackElement.textContent = "Correct!";
    }


    feedBackElement.setAttribute("class", "feedback");

    setTimeout(function(){
        feedBackElement.setAttribute("class", "feedback hide") 
    }, 1000);

    currentQuestionIndex++;

    if(currentQuestionIndex === questions.length) {
        quizEnd()
    } else {
        getQuestion();
    }
}

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
    })
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

    if(time <= 0){
        quizEnd();
    }
}


function startQuiz(){
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");


    questionsElement.removeAttribute("class");


    timerID = setInterval(clockTick, 1000)

    timerElement.textContent = time;

    getQuestion();
}


function saveHighScore(){
    let initials = initialElement.value.trim();

    if(initials !== ""){
        let saveHighScores = JSON.parse(localStorage.getItem("highscores")) || [];
        let newScore = {
            score: time,
            initials: initials
        }

        saveHighScores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(saveHighScores));

        window.location.href = "highscores.html";
    }

}

function checkForEnter(event){
    if(event.key === "Enter"){
        saveHighScore();
    }
}

// //adds the event listers because there is a button that needs to be clicked

// //start button
// //submit button
// //Enter initials

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);


