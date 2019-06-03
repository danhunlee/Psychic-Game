var alphabet = ["a", "b", "c", "d", "e", 
                "f", "g", "h", "i", "j", "k", "l", 
                "m", "n", "o", "p", "q", "r", "s",
                "t", "u", "v", "w", "x", "y", "z"];

// Keep track of how many wins and losses
var wins = 0;
var losses = 0;

// Keep track of how many guesses left
var guessLeft = 10;
var guessSoFar = "";

// Functions
// Function that updates the number of guesses left...

// MAIN PROCESS
// ==============================================================================
// Calling functions to start the game.
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Computer's Guess: " + computerGuess);

//I need the user to make a choice for choosing a letter
document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

    if (userGuess === computerGuess) {
        alert("Correct!");
        wins++;
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Computer's Guess: " + computerGuess);
        guessSoFar = "";
    }
    else {
        guessLeft--;
        if (guessSoFar == "") {
            guessSoFar = userGuess;
        }
        else {
            guessSoFar = guessSoFar + ", " + userGuess;
        }        
    }
    
    if (guessLeft === 0) {
        losses++;
        guessLeft = 10;
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Computer's Guess: " + computerGuess);
        guessSoFar = "";
    }
    
    var html = "<p>Guess what letter I'm thinking of</p>" + 
                "<p>Wins: " + wins + "</p>" + "<p>Losses: " 
                + losses + "</p>" + "<p>Guesses Left: " + 
                guessLeft + "</p>" + "<p>Your Guesses so far: " 
                + guessSoFar + "</p>";
    
    document.querySelector("#game").innerHTML = html;
}

