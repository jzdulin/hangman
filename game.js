var wins = 0;
var losses = 0;
var guesses = 10;
var guessed = [];
var randomrWord = [];

var words = ["random", "words", "to", "test"]
var randomWord = words[Math.floor(Math.random() * words.length)]
var randomWord_ = randomWord.replace(/[a-z]/g, '_ ')

document.onkeyup = function(event) {

    if (guesses === 0) {
        losses++;
    }
    
    if (computerword_ === computerword) {
        wins++;
    }
}