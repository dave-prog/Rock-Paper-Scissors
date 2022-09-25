const popup = document.querySelector('.rules-btn')
const close = document.querySelector('.close-icon')

close.addEventListener("click", closePopup);
popup.addEventListener("click", popUp);

function popUp() {
    document.querySelector(".popup-container").style.visibility = "visible";
}
function closePopup() {
    document.querySelector('.popup-container').style.visibility = "hidden";
}























// let arr = ["rock", "paper", "scissors"];

// //This function selects computer's option from the above array randomly
// function getComputerChoice() {
// 	let computerChoice = arr[Math.floor(Math.random() * arr.length)];
// 	//Math.random gets a random number from 0-1 but in this 0-array's length
// 	//Math.floor gets an absolute value of the index ranging from 0-arr.length-1
// 	return computerChoice;
// }

// //This for loop repeats the game 5 times
// for (let i = 0; i < 5; i++) {
//     function game() {
//         let playerInput = prompt("Enter one of the following: Rock, Paper or Scissors"); //accepts user input
//         let computerSelection = getComputerChoice();
//         let playerSelection = playerInput.toLowerCase();

//         //This function compares playerSelection and computerSelection for results
//         function play(computerSelection, playerSelection) {
//             console.log(computerSelection, playerSelection);
//             if (computerSelection === playerSelection) {
//                 result = console.log("It's a Tie!");
//             }
//             else if (computerSelection === "rock" && playerSelection === "paper") {
//                 result = console.log("You Win!");
//             }
//             else if (computerSelection === "scissors" && playerSelection === "rock") {
//                 result = console.log("You Win!");
//             }
//             else if (computerSelection === "paper" && playerSelection === "scissors") {
//                 result = console.log("You Win!");
//             }
//             else {
//                 result = console.log("You Lose!");
//             }
//             return result;
//         }
//         return play(computerSelection, playerSelection);
//     }

//     console.log(game());
// }
