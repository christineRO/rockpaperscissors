// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("button").click(function(){

    let userInput = $("input").val();

    $("#userChoice").text(userInput);
    console.log(userInput);

    let cpu = Math.random();
    console.log(cpu);

    let cpuAnswer = "";

    if (cpu > .67) {
        cpuAnswer = "rock";
    } else if (cpu > .33) {
        cpuAnswer = "paper";
    } else if (cpu > 0) {
        cpuAnswer = "scissors";
    }

    $("#computerChoice").text(cpuAnswer);

    if (userInput === cpuAnswer) {
        $("#result").text("Tie!");
    } else if ((userInput === "scissors") && (cpu > .67) || (userInput === "rock") && (cpu > .33) || (userInput === "paper") && (cpu > 0)) {
        $("#result").text("You loose!");
    } else if ((userInput === "scissors") && (cpu > .33) || (userInput ==="rock") && (cpu > 0) || (userInput === "paper") && (cpu > .67)) {
        $("#result").text("You win!!");
    }

    if ((userInput ! "") || (userInput ! "") || (userInput ! "")) {

    }
});




// DOCUMENT READY FUNCTION BELOW

