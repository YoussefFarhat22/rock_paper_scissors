const buttonsSelection = document.querySelectorAll('[data-selection]');
const playerScore = document.querySelector('[data-your-score]');
const computerScore = document.querySelector('[data-computer-score]');
const result = document.querySelector('.result');

let myScore = 0;
let opponentScore = 0;

buttonsSelection.forEach((btn) => {
   btn.addEventListener('click',(e) => {
    playerRound(btn.dataset.selection)
   })
})


// Show the winner
function displayWinner(score){
 if(score >= 5) {
  result.textContent = `${score === myScore ? 'You win the game 🎉' : 'computer win the game'}`
  resetGame()
  }
 }

 function resetGame(){
   myScore = 0
   opponentScore = 0
   playerScore.textContent = 0
   computerScore.textContent = 0
 }
 
 // play one round function 
 function playerRound(playerSelection){
  computerChoice = getComputerChoice();
  if((playerSelection === 'rock' && computerChoice === "scissors")  || (playerSelection === 'scissors' && computerChoice  === 'paper' ) || (playerSelection === 'paper' && computerChoice  === 'rock' ))
  {
   playerScore.textContent = `${++myScore}`;
   displayWinner(myScore)
  }
  else if ((playerSelection === 'scissors' && computerChoice === "rock")  || (playerSelection === 'paper' && computerChoice  === 'scissors' ) || (playerSelection === 'rock' && computerChoice  === 'paper' ))
  {
   computerScore.textContent = `${++opponentScore}`;
   displayWinner(opponentScore)
  }
  else{
   console.log("draw!")
  }
 }
 
 // Set computer Choice
 function getComputerChoice(){
  let choices = ["paper","scissors","rock"];
  return choices[Math.floor(Math.random() * choices.length)]
 }

