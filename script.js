//quizStarter is the start quiz button.
var quizStarterEl = document.getElementById("quizStarter");
var titleEl = document.getElementById("title");
var paragraphEl = document.getElementById("description");
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("startButton");
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
    var countdown = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time remaining: " + secondsLeft;
        // if(secondsLeft === 0) {
        //     clearInterval(timerEl)
        // }
    }, 1000);
}

//This will be the on click function to start the quiz.
//First thing hides button, second displays first question, third is displaying the first answer... need to make all answers display and be buttons....
quizStarter.addEventListener("click", function () {
    startButton.textContent = " ";
    titleEl.textContent = quizContent[index].question;
    paragraphEl.textContent = " ";

    //This makes my answers into buttons.
    function makeButtons() {
        for (var i = 0; i < quizContent[0].possibleAnswers.length; i++) {
            document.getElementById("description").innerHTML += "<button>" + quizContent[0].possibleAnswers[i] + "</button>";
        }
    }
    //call function that makes buttons
    makeButtons();
    //calls function to start my timer
    timeStarter();

    function makeClick() {
        var newButtons = document.getElementsByTagName("button");
        newButtons.addEventListener("click", function () {
            newButtons.textContent = " ";
            index++
            titleEl.textContent = quizContent[index].question;
            newButtons.textContent = quizContent[index].possibleAnswers[i];
        })
    }
    makeClick();
})


