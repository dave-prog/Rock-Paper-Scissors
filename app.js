let arr = ["rock", "paper", "scissors"];

//selects computer optio from arr randomly
function getComputerChoice() {
	let computerChoice = arr[Math.floor(Math.random() * arr.length)];
	//Math.random gets a random number from 0-1 but in this 0-array's length
	//Math.floor gets an absolute value of the index ranging from 0-arr.length-1
	return computerChoice;
}

//repeats the game
for (let i = 0; i < 5; i++) {
    function game() {
        let playerInput = prompt("Enter one of the following: Rock, Paper or Scissors"); //accepts user input
        let computerSelection = getComputerChoice();
        let playerSelection = playerInput.toLowerCase();

        function play(computerSelection, playerSelection) {
            console.log(computerSelection, playerSelection);
            if (computerSelection === playerSelection) {
                result = console.log("It's a Tie!");
            } else if (computerSelection === "rock" && playerSelection === "paper") {
                result = console.log("You Win!");
            } else if (
                computerSelection === "scissors" &&
                playerSelection === "rock"
            ) {
                result = console.log("You Win!");
            } else if (
                computerSelection === "paper" &&
                playerSelection === "scissors"
            ) {
                result = console.log("You Win!");
            } else {
                result = console.log("You Lose!");
            }
            return result;
        }
        return play(computerSelection, playerSelection);
    }
    console.log(game());
}
