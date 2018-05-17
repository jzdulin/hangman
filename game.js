
// var wins = 0;
// var loses = 0;
// var guesses = 9;
// var guessed = [];
// var computerword = [];


// var words = ["camel", "tiger", "dog", "cat", "whale"];
// var computerword = words[Math.floor(Math.random() * words.length)];
// // Replaces letters in computer word with _
// computerword_ = computerword.replace(/[a-z]/g, '-')

// document.onkeyup = function(event) {

//     firstRow = true;

//     var userguess = event.key.toLowerCase();
//     // If userguess = a letter in computer word
//     for (var i = 0; i < computerword.length; i++) {
//         if (userguess === computerword.charAt(i)){
//             computerword_ = computerword_.replace(computerword_.charAt(i), computerword.charAt(i));
//             console.log(computerword.charAt(i));
//             guesses++;
//         }

//         //If userguess doesnt = a letter in computer word, unfortunately it runs for all letters .... even if the word has a correct letter
//         if (userguess !== computerword.charAt(i)) {
//             if (firstRow){
//                 guesses--;
//                 guessed.push(userguess);
//                 firstRow = false;
//             }
//         }

//         if (computerword_ === computerword) {
//             wins++;
//         }

//         if (guesses === 0) {
//             losses++;
//         }
//     }

// var html = 
//     "<h1> Hangman </h1>" +
//     "<p>Guess what word I'm thinking of</p>" +
//     "<p>Current Word: " + computerword_ + "</p>" +
//     "<p>Guesses Left: " + guesses + "</p>" +
//     "<p>Your Guesses so far: " + guessed.join(", ") + "</p>" +
//     "<p>Wins: " + wins + "</p>" +
//     "<p>Losses: " + loses + "</p>";

// document.querySelector("#game").innerHTML = html;

// }

var wins = 0;
var losses = 0;
var guesses = 0;
var guessed = [];
var computerWord = [];