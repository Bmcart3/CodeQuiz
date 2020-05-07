//quizStarter is the start quiz button.
var quizStarterEl = document.getElementById("quizStarter");
var titleEl = document.getElementById("title");
var paragraphEl = document.getElementById("description");
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var mainContent = document.getElementById("mainContent");
var secondsLeft = 76;
var userAnswer;
var correctAnswer = "";
var index = 0;

//array of objects which are comprised of a question, three possible answers, and the correct answer.
var quizContent = [
    {
        question: "What are the cloud clearance and visibility requirements for Class B airspace?",
        possibleAnswers: [
            "2SM visibility. 5000ft horizontal, 1000ft above, 1000ft below.",
            "3SM visibility. 5000ft horizontal, 1000ft above, 1000ft below.",
            "3SM and clear of clouds."
        ],
        correctAnswer: "3SM and clear of clouds.",
    },
    {
        question: "What is the main purpose of low flap settings?",
        possibleAnswers: [
            "Increase lift and increase drag.",
            "Make the wings flap like bird's wings.",
            "Provides more thrust to the turbines.",
        ],
        correctAnswer: "Increase lift and increase drag.",
    },
    {
        question: "At what altitudes does RVSM airspace exist?",
        possibleAnswers: [
            "RVSM starts at FL180.",
            "RVSM is between FL290 and FL410.",
            "Idk what RVSM is and I don't care. (Hint: This is gonna be wrong!)",
        ],
        correctAnswer: "RVSM is between FL290 and FL410.",
    },
    {
        question: "Which pilot certificate is required to fly in the airlines?",
        possibleAnswers: [
            "Airline Transport Pilot.",
            "Commercial Pilot.",
            "Drone Pilot.",
        ],
        correctAnswer: "Airline Transport Pilot.",
    }
]


//This function starts the timer in the top right. Function is called within quizStarter button click.
function timeStarter() {
    var countdown = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time remaining: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(countdown)
            titleEl.textContent = "Time is up! Enter your initials below."

        }
    }, 1000);
}

//This will be the on click function to start the quiz.
quizStarter.addEventListener("click", function () {
    startButton.textContent = " ";
    paragraphEl.textContent = " ";
    //call function that makes buttons
    makeButtons();
    //calls function to start my timer
    timeStarter();
    createContent();
})

function nextQuestion() {
    index++
    paragraphEl.textContent = ""
    if (event.target.getAttribute("data-value") === quizContent[0].correctAnswer) {
    } else {
        secondsLeft -= 10
    }
    if (index === quizContent.length) {
        titleEl.textContent = "All done! Input your initials below!";
        var formMaker = document.createElement("form");
        formMaker.setAttribute("id", "endForm");
        titleEl.appendChild(formMaker);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", "");
        document.getElementById("endForm").appendChild(input);

        var endButton = document.createElement("button");
        endButton.setAttribute("value", "Submit");
        endButton.setAttribute("class", "btn btn-primary");
        endButton.textContent = "Submit";
        formMaker.appendChild(endButton);
        //Need to get this button to redirect to highscore. Not sure how to implement using window.location.href with a dynamically created button.
    } else {
        createContent()
        makeButtons()
    }
}

function makeButtons() {
    for (var i = 0; i < quizContent[index].possibleAnswers.length; i++) {
        var btnMaker = document.createElement("button")
        btnMaker.textContent = quizContent[index].possibleAnswers[i]
        btnMaker.setAttribute("data-value", quizContent[index].possibleAnswers[i])
        btnMaker.addEventListener("click", nextQuestion)
        paragraphEl.appendChild(btnMaker)
    }
}


function createContent() {
    titleEl.textContent = quizContent[index].question;
}

