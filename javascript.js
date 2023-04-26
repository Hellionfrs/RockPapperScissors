console.log("Hello world")

const options = ['Rock','Paper', 'Scissors'];
const playerSelection = "rock";

function getComputerChoice(){
  return options[Math.floor(options.length * Math.random())];
}
let computerSelection = getComputerChoice();
let playerPoints = [0];
let computerPoints = [0];

function playround(){
  //Function plays a single round of Rock Paper Scissors
  //Function should take two parameters 
  //- playerSelection
  //- computerSelection
  let player = prompt("Choose between Rock, paper and Scissors").toLowerCase();
  let computer = getComputerChoice().toLowerCase();
  // scissors -> paper -> rock -> scissors

  let result = winner(player, computer);
  if (result === true){
    console.log(`player won with ${player} over ${computer}`);
    return playerPoints[0] += 1
  } else if (result === false){
    console.log(`player lose with ${player} over ${computer}`);
    return computerPoints[0] += 1
  } else{
    console.log(`player tied with ${player} over ${computer}`);
    return;
  }
  
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
  for (let i = 0; i < 5; i++){
    playround();
  }
  console.log(`player have ${playerPoints[0]}`);
  console.log(`computer hass ${computerPoints[0]}`);
  if (playerPoints[0] > computerPoints[0]){
    clear();
    return "Player Won!";
  } else if ( computerPoints[0] > playerPoints[0]){
    clear();
    return "Computer Won";
  } else {
    clear();
    return "Tied!"
  }
}

function clear(){
  playerPoints[0] = 0;
  computerPoints[0] = 0;
}

// `player won with ${player} over ${computer}`;