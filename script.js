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


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playGame (){
let humanScore = 0;
let computerScore = 0;

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

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

console.log(`Final score: Human ${humanScore} - Computer ${computerScore}`);

if (humanScore > computerScore) {
    console.log("Yeah! You won!");
} else if (humanScore < computerScore) {
    console.log("Noo. You lost!");
} else {
    console.log("That's a tie.");
}
}


playGame();

