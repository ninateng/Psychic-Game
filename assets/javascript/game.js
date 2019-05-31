

//listing variables... connect to html file
let wins = document.getElementById("wins")
let losses = document.getElementById("losses")
let myGuess = document.getElementById("your-guess")
let cGuess = document.getElementById("computer-guess")
let guesses = document.getElementById("guesses")
let choices = document.getElementById("choices")

//array contains alphabet
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//array that will hold inputs from user 
var yourChoices = [];

//variables
let guessesNum = 10;
let winsNum = 0;
let lossNum = 0;

//function for when users key is pressed/lifted
document.onkeyup = (function (event) {

  //taking empty array and pushing user's input/key pressed
  yourChoices.push(event.key);
  //connecting and wrtting with "innerHTML" users input/key pressed
  choices.innerHTML = yourChoices;

  //if key is pressed
  if (event.keyCode ) {
    var mGuess = event.key;
    myGuess.innerHTML = mGuess.toLowerCase();

     //checking if user key is a valid input
     var isValid = alphabet.includes(mGuess);

    //chooses random number 0-26
    let randomNum = Math.floor(Math.random() * 27)

    //computers guess... randomNum is random index chosen from array ALPHABET
    var comGuess = alphabet[randomNum]
    cGuess.innerHTML = comGuess

    //if user chooses correctly, win counter increments
    if (mGuess === comGuess) {
      winsNum++
      wins.innerHTML = winsNum
    }
    //if user key is invalid gives an alert
    else if( isValid === false) {
      alert("Please choose a letter!!! \n YOU STILL LOSE AMOUNT OF GUESSES!\nbe careful......");
    }
    else {
       //if user chooses incorrectly, loss counter increments
      lossNum ++
      losses.innerHTML = lossNum
      //amount of guesses decrements
      guessesNum --
      guesses.innerHTML = guessesNum;
    }
  }

})