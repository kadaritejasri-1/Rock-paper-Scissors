let playerscore = 0;
let computerscore = 0;


function playGame(playerChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    document.getElementById("playerChoice").innerText = "You choice: " + playerChoice;
    document.getElementById("computerChoice").innerText = "Computer choice: " + computerChoice;
    if (playerChoice === computerChoice) {
        document.getElementById("result").innerText = "Draw!";
    }
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')

    ) {
        playerscore++;
        document.getElementById("result").innerText = "You Win!";
    }
    else {
        computerscore++;
        document.getElementById("result").innerText = "Computer Wins!";
    }

    document.getElementById("score").innerText = `You: ${playerscore} | Computer: ${computerscore}`;
}
function resetGame() {
    playerscore = 0;
    computerscore = 0;

    document.getElementById("playerChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("result").innerText = "";
    document.getElementById("score").innerText = "You: 0 | Computer: 0";
}