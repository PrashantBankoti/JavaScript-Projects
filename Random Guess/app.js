let maximum = parseInt(prompt("Welcome! Enter Your Max Number:"));
while(!maximum){
    maximum= parseInt(prompt("Enter a Valid Number:"));
}

const randomNumber=Math.floor(Math.random()*maximum)+1; 
// console.log(randomNumber);
let guessedNumber = parseInt(prompt("Enter Your First Guess"));
let count=1;
while(parseInt(guessedNumber)!==randomNumber){
    if(guessedNumber==='q'){
        break;
    }
    count++;
    if(guessedNumber>randomNumber){
       guessedNumber= prompt("Too high, Guess Again");
    }
    else{
        guessedNumber= prompt("Too Low, Guess Again");
    }
    
}

if(guessedNumber==='q'){
    console.log("You have been successfully logged out of the Game");
}else{
console.log(`You finally got it. It took you ${count} guesses.`); 
}






