//variable to contain users choice
let userChoice = prompt("Please, select R - Rock, P - Paper or S - Scissor");

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

//function that returns users choice
function getUserChoice() {
  //Variable to contain userChoice formatted to lowerCase
  let choice = userChoice.toLowerCase();

  //Conditional to return a value based in choice value
  if (choice === "r") {
    let userRock = "Rock";
    return userRock;
  } else if (choice === "p") {
    let userPaper = "Paper";
    return userPaper;
  } else if (choice === "s") {
    let userScissor = "Scissor";
    return userScissor;
  } else {
    console.log("Please, refresh the page and select again");
  }
}
