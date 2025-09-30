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

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("Congrats! You win :)");
            humanScore++;
    } else {
        console.log("Nooo! You loose :(")
            computerScore++;
    }

}
