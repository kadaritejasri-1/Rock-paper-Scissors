let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    let choices = ["rock", "paper", "scissors"];

    let computerChoice =
        choices[Math.floor(Math.random() * 3)];

    document.getElementById("playerChoice").innerText =
        "You chose: " + playerChoice;

    document.getElementById("computerChoice").innerText =
        "Computer chose: " + computerChoice;

    if (playerChoice === computerChoice) {

        document.getElementById("result").innerText =
            "Draw!";

    }

    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {

        playerScore++;

        document.getElementById("result").innerText =
            "You Win! 🎉";

    }

    else {

        computerScore++;

        document.getElementById("result").innerText =
            "Computer Wins!";

    }

    document.getElementById("score").innerText =
        `You: ${playerScore} | Computer: ${computerScore}`;
}


function resetGame() {

    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("result").innerText = "";

    document.getElementById("score").innerText =
        "You: 0 | Computer: 0";
}