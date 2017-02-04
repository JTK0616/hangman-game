document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        document.getElementById(randomWord)="random_word";
    }
}

var wordbank=["Elementary","Playground","Crayons","Glitter", "Backpack", "Recess", "Teacher", "Desk", "Encyclopedia", "Library", "Homeroom"];

var randomWord = wordbank[Math.floor(Math.random() * wordbank.length)];

// var letterguessed = event.key;


