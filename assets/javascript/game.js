//Capture those choices
//Compare whether they are equal or not
//Display to the user if you made the right choice or not
//If correct, then win should increment to 1 
//If incorrect, then keep going and show that you have 9 guesses left
//If still incorrect after 9 guesses then lose 
//restart

//I need the computer to choose a letter for guessing
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];

//Keep track of how many wins and losses
var wins = 0;
var losses = 0;

//Keep track of how many guesses left
var guessLeft = 10;

//Functions
// Function that updates the number of guesses left...
// function updateGuesses() {
//     document.querySelector("#Guesses Left").innerHTML = "Guesses Left: " + guessLeft;
//   }


// MAIN PROCESS
// ==============================================================================

// Calling functions to start the game.
// updateGuesses();

//I need the user to make a choice for choosing a letter
document.onkeyup = function() {

    computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log(computerGuess);

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    console.log(userGuess);

    if(userGuess === computerGuess) {
        alert("Correct!");
        wins++;
    }
    else {
        guessLeft--;

    }
    if (guessLeft===0) {
        losses++;
        guessLeft=10;
    }
    
    var html = "<p>Guess what letter I'm thinking of</p>" + 
    "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + 
    "<p>Guesses Left: " + guessLeft + "</p>";
    
    document.querySelector("#game").innerHTML = html;
}
