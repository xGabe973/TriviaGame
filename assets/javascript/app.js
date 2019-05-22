$(document).ready(function() {
    var openScreen;
    var gameHTML;
    var counter = 20;
    var selectedAnswer;
    var clock;
    var questionCounter = 0;
    var score = {
        right: 0,
        wrong: 0,
        unasnwered: 0
    }
    var questions = [
        "Who gave Goku the Flying Nimbus?",
        "Who is Kakarot's brother?",
        "How many members were there in the Ginyu Force?",
        "Who is the strongest warrior in universe 11?",
        "Who was Goku's first friend?",
        "What is Goku's ultimate form?",
        "Who gave Goku the 4-star Dragonball?",
        "what is the angel's name from Universe 6?",
        "From what universe are the Z fighters from?",
        "Who is Gohan's real dad?",
    ]
    var choices = [
        ["King Kai", "Porunga", "Master Roshi", "Korin"],
        ["Vegeta", "Krillin", "Nappa", "Raditz"],
        ["10", "5", "3", "7"],
        ["Dypso", "Toppo", "Jiren", "Beerus"],
        ["Krillin", "Master Roshi", "Yamcha", "Bulma"],
        ["Super Saiyan Blue", "Ultra Instinct", "Super Saiyan Red", "SSJ3"],
        ["Gohan", "Korin", "Master Roshi", "Bulma"],
        ["12", "4", "7", "6"],
        ["Zamasu", "Zeno", "Whis", "Vados"],
        ["Piccolo", "Bardock", "Goku", "Bulma"]
    ]
    var answers = [
        "Master Roshi",
        "Raditz",
        "5",
        "Jiren",
        "Bulma",
        "Ultra Instinct",
        "Gohan",
        "Vados",
        "7",
        "Piccolo"
    ]

    function openingPage() {
        openScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $("#mainArea").append(openScreen);
    }

    openingPage();

    $(".mainArea").on("click", ".start-button", function (event) {
        event.preventDefault();
        $(".jumbotron").hide();
        generateQuestion();
        timer();
    })

    $("body").on("click", ".answer", function (event) {
        //I need a forloop here
        selectedAnswer = $(this).text();
        selectedAnswer == answers[questionCounter]
        clearInterval(clock);
        generateWin();
        clearInterval(clock);
        generateLoss();
    })

    $("body").on("click", ".reset-button", function (event) {
        restartQuiz;
    })

    function generateQuestion() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questions[questionCounter] + "</p><p class='first-answer answer'>A. " + choices[questionCounter][0] + "</p><p class='answer'>B. " + choices[questionCounter][1] + "</p><p class='answer'>C. " + choices[questionCounter][2] + "</p><p class='answer'>D. " + choices[questionCounter][3] + "</p>";
        $(".mainArea").html(gameHTML);
    }
    function timeoutLoss() {
        score.unanswered++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + answers[questionCounter] + "</p>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000)
    }
    function generateWin() {
        score.right++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + answers[questionCounter] + "</p>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000)
    }
    function generateLoss() {
        score.wrong++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + answers[questionCounter] + "</p>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000);
    }
    function wait() {
        //I need another Forloop here
        
        questionCounter < 9
        questionCounter++ ,
            generateQuestion(),
            counter = 20;
        timer();
        finalScreen()
    }
    function finalScreen() {
        gameHTML = "<p>Congrats! You scored" + score.right + "right. You answered" + score.wrong + "incorrectly, and you left" + score.unasnwered + "unanswered</p>"
        $(".mainArea").html(gameHTML)
    }

    function restartQuiz() {
        score.right = 0;
        score.wrong = 0;
        score.unanswered = 0;
        questionCounter = 0;
        counter = 20;
        generateQuestion();
        timer();
    }

    function timer() {
        clock = setInterval(twentySeconds, 1000);
        function twentySeconds() {
            if (counter === 0) {
                clearInterval(clock);
                timeoutLoss();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
})