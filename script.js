//Variable to contain users choice
let userChoice = prompt("Please, select Rock, Paper or Scissor");

//Variables to track player and computer score
let humanScore = 0;
let computerScore = 0;

//Create function that returns the computer choice
function getComputerChoice() {
  //Create an random variable that return a value between 0 and 33
  let randomNumber = Math.round(Math.round(Math.random() * 100) / 3);

  //Conditional that compare randomNumber between a range to return 3 values
  if (randomNumber <= 11) {
    let rock = "Rock";
    return rock;
  } else if (randomNumber <= 22) {
    let paper = "Paper";
    return paper;
  } else {
    let scissor = "Scissor";
    return scissor;
  }
}

//Function that returns users choice
function getHumanChoice() {
  //Variable to contain userChoice formatted to lowerCase
  let choice = userChoice.toLowerCase();

  //Conditional to return a value based in choice value
  if (choice === "rock") {
    let userRock = "Rock";
    return userRock;
  } else if (choice === "paper") {
    let userPaper = "Paper";
    return userPaper;
  } else if (choice === "scissor") {
    let userScissor = "Scissor";
    return userScissor;
  } else {
    console.log("Please, refresh the page and select again");
  }
}

//Function gets humanChoice and computerChoice
//Function compares the two choices
//Conditional to determine the winner, based in Rock, Paper scissor rules
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "Rock" && computerChoice === "Scissor") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissor" && computerChoice === "Paper")
  ) {
    humanScore++;
    console.log("Human Wins!");
  } else if (humanChoice === computerChoice) {
    console.log("Draw!");
  } else {
    computerScore++;
    console.log("Computer Wins!");
  }
}

//Variables to use as arguments to playRound
//they contain the result from getHumanChoice and getComputerChoice functions
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
