
let playerWin = 0;
let playerLose = 0;
let compWin = 0;
let compLose = 0;

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
function getPlayerChoice() {

    let player = "";

    let choice = "";

    if (player === "rock") {

        choice = "Rock";

    } else if (player === "paper") {

        choice = "Paper";

    } else if (player === "scissors") {

        choice = "Scissors";

    } else {

        choice = "Rock";

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

function game() {

    /*for (let i = 0; i < 5; i++) {

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
    
        console.log(playRound(playerSelection, computerSelection));

    }*/

    if (playerWin > compWin) {
        console.log("Congratulations - you won the game!")
    } else if (compWin > playerWin) {
        console.log("The computer won the game - better luck next time!")
    } else {
        console.log("Wow - you and the computer have tied!");
    }

}

game();
