//Create function that returns the computer choice
function getComputerChoice() {
  //Create an random variable that return a value between 0 and 33
  let randomNumber = Math.round(Math.round(Math.random() * 100) / 3);
  console.log(randomNumber);

  //Conditional that compare randomNumber between a range to return 3 values
  if (randomNumber <= 11) {
    let rock = "Rock";
    return console.log(rock);
  } else if (randomNumber <= 22) {
    let paper = "Paper";
    return console.log(paper);
  } else {
    let scissor = "Scissor";
    return console.log(scissor);
  }
}
console.log(getComputerChoice());
