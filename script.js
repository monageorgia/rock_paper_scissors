function getComputerChoice() {
    let randomNumber = Math.random();
    
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper";
    } else {
        return "scissors"
    }
 
}

console.log(getComputerChoice());

function getHumanChoice() {
    let userInput= prompt ("Rock, Paper or Scissors?");
    return userInput;
}

let humanScore = 0;
let computerScore = 0;