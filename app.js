let computerChoices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".outer-circle");
const closePopup = document.querySelector(".close-icon");
const popup = document.querySelector(".rules-btn");

buttons.forEach(userSelection);

function userSelection(selection) {
	selection.addEventListener("click", () => {
		selected = selection.getAttribute("data-choice");
		console.log(selection);
	});
}

function computerSelection() {
  	let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  	//Math.random gets a random number from 0-1 but in this 0-array's length
  	//Math.floor gets an absolute value of the index ranging from 0-arr.length-1 
	let optionList = [];
	for (let i = 0; i < buttons.length; i++) {
		const element = buttons[i];
		optionList.push(element.getAttribute("data-choice"));
	}

	let optionSelected = '';
	for (let j = 0; j < optionList.length; j++) {
		optionSelected = optionList[j];

		if (optionSelected == computerChoice) {
			console.log(buttons[j]);
		}
	}
	return computerChoice;
}
console.log(computerSelection());
 
closePopup.addEventListener("click", closeContainer);
popup.addEventListener("click", popUp);

function closeContainer() {
	document.querySelector(".popup-container").style.visibility = "hidden";
}
function popUp() {
	document.querySelector(".popup-container").style.visibility = "visible";
}

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
