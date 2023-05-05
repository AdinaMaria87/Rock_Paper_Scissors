
function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

let scorePlayer = 0;
let scoreComputer = 0;

function playRound(playerSelection, computerSelection) {
    

    if(playerSelection == "rock" && computerSelection == "paper") {
        scoreComputer++;
        console.log("You lose! Paper beat rock!" + " Your score is:" + scorePlayer + " and computer score is: " + scoreComputer);
        
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        scorePlayer++;
        console.log("You win! Rock beats scissors!" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer);
    }
    else if(playerSelection == "paper" && computerSelection == "rock") {
        scorePlayer++;
        console.log("You win! Paper beats rock!" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer);
       
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        scoreComputer++;
        console.log("You lost! Scissors beat paper!" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        scorePlayer = scorePlayer++;
        console.log("You win! Scissors beat paper" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer);
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        scoreComputer++;
        console.log("You lost! Rock beats scissors!" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer);
    }
    else {
        console.log("It's equality" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer);
    }

}


function game() {
    
    for(let i=1; i<=5; i++) {
        let playerSelection = prompt("Make your choice: rock, paper or scissors?").toLocaleLowerCase();
        let computerSelection = getComputerChoice().toLocaleLowerCase();
        playRound(playerSelection, computerSelection);
        }
    if(scorePlayer < scoreComputer) {
         console.log("You lost!")
        }
    else if(scorePlayer > scoreComputer) {
        console.log("You win!");
    }
    else {
        console.log("It's equality!");
    }
}
game();