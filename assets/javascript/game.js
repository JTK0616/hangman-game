
// Define the wordbank to be used in the hangman game

var wordbank=["elementary","playground","crayons","glitter", "backpack", "recess", "teacher", "desk", "encyclopedia", "library", "homeroom", "lunchbox","classmates","crosswalk"];

// Randomly choose a word from the wordbank to be guessed

var randomWord = wordbank[Math.floor(Math.random() * wordbank.length)];
var dashArray = [];

console.log(randomWord);

//Take random word and create dashed word

for (i = 0; i < randomWord.length; i++) {
	dashArray[i] = "_";
}
document.getElementById('dashed_word').innerHTML = dashArray.join(" ");


//Show found letters in dashed word

document.onkeyup = function(event) {
	var guess = event.key;
	for(var i = 0; i < randomWord.length; i++) {
		if(randomWord[i] === guess) {
			dashArray[i] = guess;
		}
	} //end for loop
	document.getElementById('dashed_word').innerHTML = dashArray.join(" ");
}

// Record previous guesses

// var previousGuesses = [];
// guess.push(previousGuesses);
// document.getElementById('guesses_made').innerHTML=

// // document.onkeyup = function (event) {
// //   var keyPress;

// //   if (typeof event !== 'undefined') {
// //     keyPress = event.keyCode;
// //   }
// //   else if (event) {
// //     keyPress = e.which;
// //   }

// var previousGuesses.push(event.key);

// //   return false;
// // };

// document.getElementById('previousGuesses').innerHTML=(previousGuesses);


// // Define Variables

//   var guessesLeft = 10;
//   var losses = 0;
//   var wins = 0;
  


// //Display Number of guesses remaining

// document.getElementById('guesses_left').innerHTML = (guessesLeft)

// //Display Previous Guesses



// //Check letter entered against letter in dashed word

// // document.onkeyup = function(dashes) {
// // 	var guess = event.key;

// // 	for (i=0; i<dashes.length; i++) {
// // 		if (guess == randomWord.charAt(i)){
// // 			str.replace(/dashes.charAt(i)/g, document.body.onkeyup);
// // 		} else
// // 		{guessesLeft - 1};
// // 	}
// // }


 

  