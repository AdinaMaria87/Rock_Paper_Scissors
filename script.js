const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const result = document.getElementById("result");


function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

let scorePlayer = 0;
let scoreComputer = 0;
let scoreText = "";

function playRound(playerSelection) {
    let parag = document.createElement("p");
    let computerSelection = getComputerChoice().toLowerCase();

    if(playerSelection == "rock" && computerSelection == "paper") {
        scoreComputer++;
        parag.textContent = "You lost! Paper beat rock!" + " Your score is:" + scorePlayer + " and computer score is: " + scoreComputer;
        
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        scorePlayer++;
        parag.textContent = "You win! Rock beats scissors!" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer;
    }
    else if(playerSelection == "paper" && computerSelection == "rock") {
        scorePlayer++;
        parag.textContent = "You win! Paper beats rock!" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        scoreComputer++;
        parag.textContent = "You lost! Scissors beat paper!" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        scorePlayer = scorePlayer++;
        parag.textContent = "You win! Scissors beat paper" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        scoreComputer++;
        parag.textContent = "You lost! Rock beats scissors!" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer;
    }
    else {
        parag.textContent = "It's equality" + " Your score is:" + " " + scorePlayer + " and computer score is: " + scoreComputer;
    }

    result.appendChild(parag);
    
    if(scorePlayer == 5 || scoreComputer == 5) {
        game();
    }
    

}

btn1.addEventListener("click", () => {
   playRound("rock");
});

btn2.addEventListener("click", () => {
    playRound("paper")
});
btn3.addEventListener("click", () => {
    playRound("scissors");
 });

function game() {
    let paragFinal = document.createElement("p");

    if(scorePlayer < scoreComputer) {
         paragFinal.textContent = "YOU LOST!";
        }
    else if(scorePlayer > scoreComputer) {
        paragFinal.textContent = "YOU WIN!";
    }
    else {
        paragFinal.textContent= "It's equality!";
    }
    result.appendChild(paragFinal);
}