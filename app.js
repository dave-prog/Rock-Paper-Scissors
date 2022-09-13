let arr = ["rock", "paper", "scissors"];
//let input = prompt("Enter one of the following: Rock, Paper or Scissors");

function getComputerChoice() {
    let computerChoice = arr[Math.floor(Math.random() * arr.length)];
    //Math.random gets a random number from 0-1 but in this 0-array's length
    //Math.floor gets an absolute value of the index ranging from 0-arr.length-1
    return computerChoice;
}

function getPlayerChoice() {
    let input = prompt("Enter one of the following: Rock, Paper or Scissors");
    return input;
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

function play(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log('It\'s a Tie')
    }

}


console.log(computerSelection, playerSelection);