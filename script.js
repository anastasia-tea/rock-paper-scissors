
let playerWin = 0;
let playerLose = 0;
let compWin = 0;
let compLose = 0;

const board = document.querySelector("#board");

const cRock = document.querySelector("#cRock");
const cPaper = document.querySelector("#cPaper");
const cScissors = document.querySelector("#cScissors");

const pRock = document.querySelector("#pRock");
const pPaper = document.querySelector("#pPaper");
const pScissors = document.querySelector("#pScissors");

const scoreboard = document.querySelector("#score");
//const results = document.querySelector("#results");
const info = document.querySelector("#info");

//Referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let numberChoice = getRandomNumber();
    let choice = "";

    if (numberChoice === 0) {
        choice = "Rock";
        cRock.style.background = "blue";
    } else if (numberChoice === 1) {
        choice = "Paper";
        cPaper.style.background = "blue";
    } else if (numberChoice === 2) {
        choice = "Scissors";
        cScissors.style.background = "blue";
    } else {
        choice = "Rock";
        cRock.style.background = "blue";
    }

    return choice;
}


/*
Referenced
https://www.w3schools.com/jsref/met_win_prompt.asp
https://www.shecodes.io/athena/3183-how-to-make-a-prompt-input-in-javascript-case-insensitive#:~:text=let%20input%20%3D%20prompt(%22Enter,in%20uppercase%20or%20lowercase%20characters.
*/
function getPlayerChoice() {

    //let player = "prompt(("Rock, Paper, or Scissors?").toLowerCase());"
    let player = "paper";

    /*pRock.addEventListener('click', () => { 
        player = "rock";
    });
    pPaper.addEventListener('click', () => { 
        player = "paper";
    });
    pScissors.addEventListener('click', () => { 
        player = "scissors";
    });*/

    let choice = "";

    if (player === "rock") {

        choice = "Rock";
        pRock.style.background = "blue";

    } else if (player === "paper") {

        choice = "Paper";
        pPaper.style.background = "blue";

    } else if (player === "scissors") {

        choice = "Scissors";
        pScissors.style.background = "blue";

    } else {

        choice = "Rock";
        pRock.style.background = "blue";

    }

    return choice;

}

function playRound(playerSelection, computerSelection) {

    let tie = "Tie! You both chose " + playerSelection;
    let win = "You win! " + playerSelection + " beats " + computerSelection;
    let lose = "You lose! " + computerSelection + " beats " + playerSelection;

    if (playerSelection === "Rock") {

        if (computerSelection === "Rock") {
            result = tie;
        } else if (computerSelection === "Paper") {
            playerLose++;
            compWin++;
            result = lose;
        } else {
            playerWin++;
            compLose++;
            result = win;
        }

    } else if (playerSelection === "Paper") {

        if (computerSelection === "Rock") {
            playerWin++;
            compLose++;
            result = win;
        } else if (computerSelection === "Paper") {
            result = tie;
        } else {
            playerLose++;
            compWin++;
            result = lose;
        }

    } else {

        if (computerSelection === "Rock") {
            playerLose++;
            compWin++;
            result = lose;
        } else if (computerSelection === "Paper") {
            playerWin++;
            compLose++;
            result = win;
        } else {
            result = tie;
        }

    }

    return result;

}

function showScore(playerWin, compWin) {

    const scores = document.createElement("p");
    scores.classList.add("scores");
    scores.textContent = `${playerWin} + " - " + ${compWin}`;

    scoreboard.appendChild(scores);

    board.appendChild(scores);

}

function game() {
    
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    /*for (let i = 0; i < 2; i++) {

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
    
        console.log(playRound(playerSelection, computerSelection));

    }*/

    const winner = document.createElement("p");
    winner.classList.add("winner");

    if (playerWin > compWin) {
        winner.textContent = "Congratulations - you won the game!";
    } else if (compWin > playerWin) {
        winner.textContent = "The computer won the game - better luck next time!";
    } else {
        winner.textContent = "Wow - you and the computer have tied!";
    }

    info.appendChild(winner);

}

game();
