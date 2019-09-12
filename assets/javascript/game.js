// Combo of Calc, Letter Guess, 

// Global Variables
var targetScore = 0;
var wins = 0;
var losses = 0;
var roundScore = 0;
var crystalNumber = (Math.floor(Math.random() * 12) + 1);

var scoreTarget = $("#number-to-guess").text(targetScore)

// Functions

for (var i = 0; i < 4; i++) {
   
};

console.log(crystalNumber)

function generateRandomNumber() {

};

function gameStart() {
    targetScore = (Math.floor(Math.random() * 100) + 21);
    $("#number-to-guess").text("Your Target Score is: " + targetScore);
 };

function gameReset() {

};

function addToRoundScore() {

};

function checkIfWon() {

};


// jQuery Click Events
$("#crystal-color1").on("click", function() {
    var valueCrystal = ($(this).attr("data-crystalvalue"));
    valueCrystal = parseInt(valueCrystal);
    roundScore += valueCrystal;
    console.log("value crystal " + valueCrystal)
});

$("#crystals").on("click", function () {

});

// Calls

gameStart();