
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

const buttons = document.querySelectorAll(".buttons");

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
function getPlayerChoice(player) {

    let choice = "";
    
    if (player === "rock") {

        choice = "Rock";
        pRock.style.background = "blue";

    } else if (player === "paper") {

        choice = "Paper";
        pPaper.style.background = "blue";

    } else {

        choice = "Scissors";
        pScissors.style.background = "blue";

    }

    return choice;

}

function playGame(player) {

    let playerSelection = getPlayerChoice(player);
    let computerSelection = getComputerChoice();

    const tie = document.createElement("p");
    tie.classList.add("tie");

    const win = document.createElement("p");
    win.classList.add("win");

    const lose = document.createElement("p");
    lose.classList.add("lose");

    if (playerSelection === "Rock") {

        if (computerSelection === "Rock") {
            tie.textContent = `Tie! You both chose ${playerSelection}`;
            info.appendChild(tie);

        } else if (computerSelection === "Paper") {
            playerLose++;
            compWin++;
            lose.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            info.appendChild(lose);

        } else {
            playerWin++;
            compLose++;
            win.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            info.appendChild(win);
        }

    } else if (playerSelection === "Paper") {

        if (computerSelection === "Rock") {
            playerWin++;
            compLose++;
            win.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            info.appendChild(win);
        } else if (computerSelection === "Paper") {
            tie.textContent = `Tie! You both chose ${playerSelection}`;
            info.appendChild(tie);
        } else {
            playerLose++;
            compWin++;
            lose.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            info.appendChild(lose);
        }

    } else {

        if (computerSelection === "Rock") {
            playerLose++;
            compWin++;
            lose.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            info.appendChild(lose);
        } else if (computerSelection === "Paper") {
            playerWin++;
            compLose++;
            win.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            info.appendChild(win);
        } else {
            tie.textContent = `Tie! You both chose ${playerSelection}`;
            info.appendChild(tie);
        }

    }

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

playGame();

/*
Referenced
https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons
*/
buttons.forEach(button => {
    button.addEventListener('click', e => {
        getPlayerChoice(button.name);
    });
});

/*
function game() {
    
    for (let i = 0; i < 3; i++) {

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
    
        playRound(playerSelection, computerSelection);

    }

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

game();*/
