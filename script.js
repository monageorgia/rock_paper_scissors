document.addEventListener("DOMContentLoaded", () => {


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

let roundCount = 0;
const maxRounds = 5;

const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const buttons = document.querySelectorAll("button");


buttons.forEach(button => {
        button.style.backgroundColor = "pink";
        button.style.width = "200px";
        button.style.height = "70px";

    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    })
})


let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    console.log("Runde gespielt:", roundCount + 1);

    humanChoice = humanChoice.toLowerCase();
    let message = "";

    if (humanChoice === computerChoice) {
    message = `Both choose ${humanChoice} - it's a tie!`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            message = "Congrats! You win :)";
            humanScore++;
    } else {
            message = "Noooo! You loose :(";
            computerScore++;
    }

    roundCount++;
    resultText.innerHTML = message;
    scoreText.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

    if (roundCount === maxRounds) {
        showFinalResult();
    }
}


function showFinalResult () {
    let finalMessage = "";
if (humanScore > computerScore) {
    finalMessage = "Yeah! You won!";
} else if (humanScore < computerScore) {
    finalMessage = "Noo. You lost!";
} else {
    finalMessage = "That's a tie.";
}

resultText.innerHTML = finalMessage;
resultText.style.fontSize = "40px";
resultText.style.fontWeight= "bold"; 
resultText.style.color ="red";

scoreText.textContent = `Final Score: You ${humanScore} - ${computerScore} Computer`

buttons.forEach(button => button.disabled = true);

showRetryButton();

}

function showRetryButton() {
    const retryButton = document.createElement("button"); // neuen Button erstellen
    retryButton.textContent = "Wanna try again?";
    retryButton.style.fontSize = "20px";
    retryButton.style.marginTop = "20px";
    retryButton.style.padding = "10px 20px";
    retryButton.style.cursor = "pointer";

    // Klick-Event: Seite neu laden
    retryButton.addEventListener("click", () => {
        location.reload();
    });

    // Button ans Ende des Body oder in ein Container-Element setzen
    document.body.appendChild(retryButton);

}
}
)