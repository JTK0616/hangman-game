
// Define the wordbank to be used in the hangman game

var wordbank=["Elementary","Playground","Crayons","Glitter", "Backpack", "Recess", "Teacher", "Desk", "Encyclopedia", "Library", "Homeroom", "Lunchbox","Classmates","Crosswalk"];

// Randomly choose a word from the wordbank to be guessed

var randomWord = wordbank[Math.floor(Math.random() * wordbank.length)];


// Start the game and display the word when the spacebr is pressed

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	console.log(randomWord)
    }
}

var dashes = "";

for (i = 0; i < randomWord.length; i++) {
  if (randomWord.charAt(i) == " ") {
    dashes += " ";
  } else {
    dashes += "-";
  }
}

document.getElementById("dashed_word").innerHTML = (dashes);


// Convert word chosen to blanks

console.log(dashes);

document.getElementById("dashed_word").innerHTML = (dashes);


// function blanksFromAnswer(randomWord) {
//   var result = "";
//   for (var i = 0; i < randomWord.length; i++) {
//     result += "_";
//   }
//   console.log(blanksFromAnswer);
// }

// function hiddenWord() {
// 	for (i=0; i<randomWord.length; i++); {
// 		console.log("_"*[i]);
// 	}
// }

// hiddenWord(randomWord);

// hiddenWord(randomWord) {
// 	console.log();
// }

// Define Variables

  var guessesLeft = 10;
  var losses = 0;
  var wins = 0;
  var previousGuesses = [];

  // document.getElementById("random_word").innerHTML = (randomWord);

  