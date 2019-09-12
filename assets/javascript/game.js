// Combo of Calc, Letter Guess, 

// Global Variables
var targetScore = 53;
var wins = 0;
var losses = 0;
var roundScore = 0;
var numberOptions = [12, 4, 1, 7, 3, 9];

$("#number-to-guess").text(targetScore)

// Functions
for (var i = 0; i < numberOptions.length; i++) {
    var randomNumber = Math.floor(Math.random() * 2);
    $("#crystal-color1").attr("data-crystalvalue", numberOptions[i] + randomNumber);
};

for (var i = 0; i < numberOptions.length; i++) {
    var randomNumber = Math.floor(Math.random() * 2);
    $("#crystal-color2").attr("data-crystalvalue", numberOptions[i] + randomNumber);
};

for (var i = 0; i < numberOptions.length; i++) {
    var randomNumber = Math.floor(Math.random() * 2);
    $("#crystal-color3").attr("data-crystalvalue", numberOptions[i] + randomNumber);
};

for (var i = 0; i < numberOptions.length; i++) {
    var randomNumber = Math.floor(Math.random() * 2);
    $("#crystal-color4").attr("data-crystalvalue", numberOptions[i] + randomNumber);
};

$("#crystal-color1").on("click", function() {
    var valueCrystal = ($(this).attr("data-crystalvalue"));
    valueCrystal = parseInt(valueCrystal);
    roundScore += valueCrystal;
    console.log("value crystal " + valueCrystal)
});

$("#crystal-color2").on("click", function() {
    var valueCrystal = ($(this).attr("data-crystalvalue"));
    valueCrystal = parseInt(valueCrystal);
    roundScore += valueCrystal;
    console.log("value crystal " + valueCrystal)
});

$("#crystal-color3").on("click", function() {
    var valueCrystal = ($(this).attr("data-crystalvalue"));
    valueCrystal = parseInt(valueCrystal);
    roundScore += valueCrystal;
    console.log("value crystal " + valueCrystal)
});

$("#crystal-color4").on("click", function() {
    var valueCrystal = ($(this).attr("data-crystalvalue"));
    valueCrystal = parseInt(valueCrystal);
    roundScore += valueCrystal;
    console.log("value crystal " + valueCrystal)
});



function generateRandomNumber() {

};

function gameStart() {

};

function gameReset() {

};

function addToRoundScore() {

};

function checkIfWon() {

};


// jQuery Click Events
$("#crystals").on("click", function () {

});