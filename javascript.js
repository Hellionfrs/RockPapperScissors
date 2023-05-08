console.log("Hello world")
const body = document.querySelector('body');
const options = ['Rock','Paper', 'Scissors'];
const playerSelection = "rock";

const btn1 = document.querySelector('.rock');
const btns = document.querySelectorAll('button');



const container = document.createElement('div');
const score = document.createElement('h1');
container.appendChild(score);

container.style.border = "2px solid black";
body.appendChild(container);

btns.forEach( btn => btn.addEventListener('click', playround));

function getComputerChoice(){
  return options[Math.floor(options.length * Math.random())];
}

const resetBtn = document.createElement('button');
resetBtn.textContent = "Reset";
body.appendChild(resetBtn);
resetBtn.addEventListener('click', reset)
let computerSelection = getComputerChoice();
let playerPoints = [0];
let computerPoints = [0];


function playround(e){
  //Function plays a single round of Rock Paper Scissors
  //Function should take two parameters 
  //- playerSelection
  //- computerSelection

  let player = this.classList.value.toLowerCase();
  let computer = getComputerChoice().toLowerCase();
  // scissors -> paper -> rock -> scissors
  
  let result = winner(player, computer);
  if (result === true){
    playerPoints[0] += 1
    score.textContent = `User points = ${playerPoints} - ${computerPoints} Computer Points`
    const msg = document.createElement('h2');
    msg.textContent = `player won with ${player} over ${computer}`;
    container.appendChild(msg)
  } else if (result === false){
    computerPoints[0] += 1
    score.textContent = `User points = ${playerPoints} - ${computerPoints} Computer Points`
    const msg = document.createElement('h2');
    msg.textContent = `player lose with ${player} over ${computer}`;
    container.appendChild(msg)
    
  } else{
    score.textContent = `User points = ${playerPoints} - ${computerPoints} Computer Points`
    const msg = document.createElement('h2');
    msg.textContent = `player tied with ${player} over ${computer}`;
    container.appendChild(msg)
  }
  game();
}

function winner(player, computer){
  if (player === "scissors" && computer === "paper"){
    return true;
  } else if (player === "paper" && computer === "rock"){
    return true;
  } else if (player === "rock" && computer === "scissors"){
    return true;
  } else  if (player === computer){
    return NaN;
  } else {
    return false;
  }
}

function game(){
  const rounds = document.querySelectorAll('h2');
  if (rounds.length === 5){
    score.textContent = msg();
    clear();
  }
}

function msg(){
  if (playerPoints[0] > computerPoints[0]){
      return `Player Won! with ${playerPoints[0]} over ${computerPoints[0]} `;
  } else if ( computerPoints[0] > playerPoints[0]){
      return `Computer Won with ${computerPoints[0]}over ${playerPoints[0]}`;
  } else {
      return "Tied!"
  }
}
function clear(){
  playerPoints[0] = 0;
  computerPoints[0] = 0;
  
  btns.forEach(btn => {
      btn.disabled= true
  });
  score.textContent += `\nhit reset to play again!`
}
function reset(){
  btns.forEach(btn => {
    btn.disabled = false
  });
  let rounds = document.querySelectorAll('h2');
  rounds.forEach(h2 => h2.parentNode.removeChild(h2));
  score.textContent = ``
}

// `player won with ${player} over ${computer}`;