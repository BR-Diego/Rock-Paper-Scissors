function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const randomNum = Math.floor(Math.random() * 3);
        if (randomNum === 0) return "rock";
        if (randomNum === 1) return "paper";
        return "scissors";
    }

    function getHumanChoice() {
        let choice;
        const validChoices = ["rock", "paper", "scissors"];
    
        while (true) {
            choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    
            if (validChoices.includes(choice)) {
                return choice;
            }
    
            alert("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
        }
    }

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoice}.`);
            return;
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
        }
    }

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        console.log("------------------");
    }

    // Announce final winner
    if (humanScore > computerScore) {
        console.log(`🎉 You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`💻 The computer wins! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game
playGame();
