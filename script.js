// Set computer Choice
function getComputerChoice(){
 let choices = ["paper","scissors","rock"];
 return choices[Math.floor(Math.random() * choices.length)]
}

let computerScore = 0;
let playerSCore = 0;



// play one round function 
function playerRound(){
 playerSelection = prompt('Enter your selection').toLocaleLowerCase();
 computerChoice = getComputerChoice();
 if((playerSelection === 'rock' && computerChoice === "scissors")  || (playerSelection === 'scissors' && computerChoice  === 'paper' ) || (playerSelection === 'paper' && computerChoice  === 'rock' ))
 {
     playerSCore++;
     return "You win!"
 }
 else if ((playerSelection === 'scissors' && computerChoice === "rock")  || (playerSelection === 'paper' && computerChoice  === 'scissors' ) || (playerSelection === 'rock' && computerChoice  === 'paper' ))
 {
     computerScore++;
     return "You lose!"
 }
 else{
     return "draw!"
 }
}


// play 5 round function 
function game(){
 for(let i = 0;i<5;i++){
     playerRound()
 }
 if(playerSCore>=3){
     console.log('Congratulation! You win!!')
 }
 else if (computerChoice >= 3){
     console.log("You lose!")
 }
 else{
     console.log("Draw");
 }
}