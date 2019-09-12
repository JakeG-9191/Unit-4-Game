// Global Variables
var targetScore = 0;
var wins = 0;
var losses = 0;
var roundScore = 0;

// Inital Crystal Values are 0
var crystalNumber = 0;
var crystalNumber2 = 0;
var crystalNumber3 = 0;
var crystalNumber4 = 0;

var scoreTarget = $("#number-to-guess").text(targetScore)

// Functions
// Generates new random number each game, to try to keep wide range of potential values, each crystalNumber is calculated at a progressive value
function generateRandomNumber() {
    crystalNumber = (Math.floor(Math.random() * 4) + 1);
    crystalNumber2 = (Math.floor(Math.random() * 7) + 1);
    crystalNumber3 = (Math.floor(Math.random() * 19) + 1);
    crystalNumber4 = (Math.floor(Math.random() * 11) + 1);
};
// Set paramaters for new game
function gameStart() {
    targetScore = (Math.floor(Math.random() * 100) + 21);
    $("#number-to-guess").text(targetScore);
    generateRandomNumber();
};
// Set game reset, function run at end of every game
function gameReset() {
    gameStart();
    generateRandomNumber();
    roundScore = 0;
    $("#round-score").text(roundScore);
};
// Check to see if player won based on score, called at bottom
function checkIfWon() {
    if (roundScore === targetScore) {
        wins++;
        $("#wins-text").text(wins);
        gameReset();
        alert("You have WON, Glory and Riches are Yours!");
    } else if (roundScore > targetScore) {
        losses++;
        gameReset();
        alert("You have LOST, Rare Gems have Escaped your Grasp!");
        $("#losses-text").text(losses);
    }
};


// jQuery Click Events
// Each crystal color has a click event to establish value and add to variable plus rewrite HTML, values are console logged out as well for reference
$("#crystal-color1").on("click", function () {
    var valueCrystal = ($(this).attr("data-crystalvalue"));
    valueCrystal = parseInt(crystalNumber);
    roundScore += valueCrystal;
    console.log("value crystal " + valueCrystal);
    $("#round-score").text(roundScore);
    checkIfWon();
});

$("#crystal-color2").on("click", function () {
    var valueCrystal = ($(this).attr("data-crystalvalue"));
    valueCrystal = parseInt(crystalNumber2);
    roundScore += valueCrystal;
    console.log("value crystal2 " + valueCrystal);
    $("#round-score").text(roundScore);
    checkIfWon();
});

$("#crystal-color3").on("click", function () {
    var valueCrystal = ($(this).attr("data-crystalvalue"));
    valueCrystal = parseInt(crystalNumber3);
    roundScore += valueCrystal;
    console.log("value crystal3 " + valueCrystal);
    $("#round-score").text(roundScore);
    checkIfWon();
});

$("#crystal-color4").on("click", function () {
    var valueCrystal = ($(this).attr("data-crystalvalue"));
    valueCrystal = parseInt(crystalNumber4);
    roundScore += valueCrystal;
    console.log("value crystal4 " + valueCrystal);
    $("#round-score").text(roundScore);
    checkIfWon();
});

// Calls
// Run game and see if player has won
gameStart();

checkIfWon();