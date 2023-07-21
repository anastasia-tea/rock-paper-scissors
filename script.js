
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
const info = document.querySelector("#info");

const buttons = document.querySelectorAll(".buttons");

const round = document.querySelector("#round");

//Referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let numberChoice = getRandomNumber();
    let choice = "";

    if (numberChoice === 0) {
        choice = "Rock";
    } else if (numberChoice === 1) {
        choice = "Paper";
    } else if (numberChoice === 2) {
        choice = "Scissors";
    } else {
        choice = "Rock";
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
    
    if (player === "Rock") {

        choice = "Rock";

    } else if (player === "Paper") {

        choice = "Paper";

    } else {

        choice = "Scissors";

    }

    return choice;

}

function showScore() {
    const score = document.querySelector("p");
    score.classList.add("score");

    score.textContent = `${playerWin} - ${compWin}`;

    scoreboard.appendChild(score);
}

function declareWinner() {
    const winner = document.createElement("p");
    winner.classList.add("winner");
    winner.style = "font-weight: bold";

    if (playerWin > compWin) {
        winner.textContent = "Congratulations - you won the game!";
    } else if (compWin > playerWin) {
        winner.textContent = "The computer won the game - better luck next time!";
    } else {
        winner.textContent = "Wow - you and the computer have tied!";
    }

    info.appendChild(winner);
}

function playRound(player) {

    let playerSelection = getPlayerChoice(player);
    let computerSelection = getComputerChoice();

    const tie = document.createElement("p");
    tie.classList.add("tie");

    const win = document.createElement("p");
    win.classList.add("win");

    const lose = document.createElement("p");
    lose.classList.add("lose");

    const score = document.createElement("p");
    score.classList.add("score");

    if (playerSelection === "Rock") {

        if (computerSelection === "Rock") {
            tie.textContent = `Tie! You both chose ${playerSelection}`;
            round.appendChild(tie);

        } else if (computerSelection === "Paper") {
            playerLose++;
            compWin++;
            lose.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            round.appendChild(lose);

        } else {
            playerWin++;
            compLose++;
            win.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            round.appendChild(win);
        }

    } else if (playerSelection === "Paper") {

        if (computerSelection === "Rock") {
            playerWin++;
            compLose++;
            win.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            round.appendChild(win);
        } else if (computerSelection === "Paper") {
            tie.textContent = `Tie! You both chose ${playerSelection}`;
            round.appendChild(tie);
        } else {
            playerLose++;
            compWin++;
            lose.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            round.appendChild(lose);
        }

    } else {

        if (computerSelection === "Rock") {
            playerLose++;
            compWin++;
            lose.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            round.appendChild(lose);
        } else if (computerSelection === "Paper") {
            playerWin++;
            compLose++;
            win.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            round.appendChild(win);
        } else {
            tie.textContent = `Tie! You both chose ${playerSelection}`;
            round.appendChild(tie);
        }

    }

    showScore();

    if (playerWin === 5 || compWin === 5) {
        declareWinner();
    }
    
}

function playGame() {


    while (playerWin !== 5 || compWin !== 5) {

        playRound();

    }

}

/*
Referenced
https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons
*/
buttons.forEach(button => {
    button.addEventListener('click', e => {
        playRound(button.name);
    });
});
