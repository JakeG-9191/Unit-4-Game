// Global Variables
var targetScore = 0;
var wins = 0;
var losses = 0;
var roundScore = 0;


var crystalNumber = 0;
var crystalNumber2 = 0;
var crystalNumber3 = 0;
var crystalNumber4 = 0;

var scoreTarget = $("#number-to-guess").text(targetScore)
// console.log(crystalNumber);
// Functions

// $("data-crystalvalue").attr(crystalNumber);

function generateRandomNumber() {
    crystalNumber = (Math.floor(Math.random() * 11) + 1);
    crystalNumber2 = (Math.floor(Math.random() * 11) + 1);
    crystalNumber3 = (Math.floor(Math.random() * 11) + 1);
    crystalNumber4 = (Math.floor(Math.random() * 11) + 1);
};

function gameStart() {
    targetScore = (Math.floor(Math.random() * 100) + 21);
    $("#number-to-guess").text(targetScore);
    generateRandomNumber();
};

function gameReset() {
    gameStart();
    generateRandomNumber();
    roundScore = 0;
    $("#round-score").text(roundScore);
};

// function addToRoundScore() {

// };

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

gameStart();

checkIfWon();