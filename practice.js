let computer;       //define computer variable
let player;         //define player variable

function computerPlay() {                       //function that determines the computer's play
    let rand = Math.random();                   //equal chance of the three options using random # generator
    if (rand <= 0.33) {
        computer = "rock";
    }   
    else if (rand <= 0.67 && rand > 0.33) {
        computer = "scissors";
    }
    else {
        computer = "paper";
    }    
};

let finish;

function result(computer, player) {             //function that determines winner of the round
    if (computer === "scissors" && player === "scissors"){
        finish = "it's a tie";
    }
    else if (computer === "scissors" && player === "paper"){
        finish = "computer wins";
    }
    else if (computer === "scissors" && player === "rock"){
        finish = "you win";
    }
    else if (computer === "rock" && player === "scissors"){
        finish = "computer wins";
    }
    else if (computer === "rock" && player === "rock"){
        finish = "it's a tie";
    }
    else if (computer === "rock" && player === "paper"){
        finish = "you win";
    }
    else if (computer === "paper" && player === "scissors"){
        finish = "you win";
    }
    else if (computer === "paper" && player === "paper"){
        finish = "it's a tie";
    }
    else {
        finish = "computer wins";
    }
    console.log(finish);
}

let bestOf;
let winningScore;
let playerScore = 0;             
let computerScore = 0;
let displayBestOf;
let displayScoreP;
let displayScoreC;
let displayRound;

function bestOfUpdate (updater) {
    if (updater === 3) {
        displayBestOf = document.getElementById("best-of-display");
        displayBestOf.innerHTML = "You're playing a best of three! First to win two rounds takes it all!";
    }
    else if (updater === 5) {
        displayBestOf = document.getElementById("best-of-display");
        displayBestOf.innerHTML = "You're playing a best of five! First to win three rounds takes it all!";
    }
    else  {
        displayBestOf = document.getElementById("best-of-display");
        displayBestOf.innerHTML = "You're playing a best of seven! First to win four rounds takes it all!";
    }
}

function playTheRound(playerPlay) {
    computerPlay();
    result(computer, playerPlay);
    if (finish === "you win"){
        playerScore++;
        displayScoreP = document.getElementById("scoreboardPlayer");
        displayScoreP.innerHTML = "Player Score: "+playerScore;
        displayRound = document.getElementById("round-outcome");
        displayRound.innerHTML = "You won that round!"
    }
    else if (finish === "computer wins"){
        computerScore++;
        displayScoreC = document.getElementById("scoreboardComputer");
        displayScoreC.innerHTML = "Computer Score: "+computerScore;
        displayRound = document.getElementById("round-outcome");
        displayRound.innerHTML = "The computer won that round."
    }
    else {
        displayRound = document.getElementById("round-outcome");
        displayRound.innerHTML = "That round was a tie."
    }
}

function playTheGame () {
    if (playerScore >= winningScore){
        alert("the player wins it all!");
        gameOver();
    }
    else if (computerScore >= winningScore){
        alert("the computer wins it all!");
        gameOver();
    }
    else {

    }
}

function gameOver() {
    bestOf = 0;
    winningScore = 0;
    playerScore = 0;
    computerScore = 0;
    displayBestOf.innerHTML = "You're playing a best of...";
    displayScoreC.innerHTML = "Computer Score: "+computerScore;
    displayScoreP.innerHTML = "Player Score: "+playerScore;
    displayRound.innerHTML = ""
}

const btn3 = document.querySelector('#best-of-3');
btn3.addEventListener('click', () => {
    bestOf = 3;
    winningScore = Math.ceil(bestOf/2); 
    bestOfUpdate (3);
})

const btn5 = document.querySelector('#best-of-5');
btn5.addEventListener('click', () => {
    bestOf = 5;
    winningScore = Math.ceil(bestOf/2);
    bestOfUpdate (5);
})

const btn7 = document.querySelector('#best-of-7');
btn7.addEventListener('click', () => {
    bestOf = 7;
    winningScore = Math.ceil(bestOf/2);  
    bestOfUpdate (7);
})

const btnRock = document.querySelector('#rock-button');
btnRock.addEventListener('click', () => {
    player = 'rock';
    playTheRound(player);
    playTheGame();
})

const btnPaper = document.querySelector('#paper-button');
btnPaper.addEventListener('click', () => {
    player = 'paper';
    playTheRound(player);
    playTheGame();
})

const btnScissors = document.querySelector('#scissors-button');
btnScissors.addEventListener('click', () => {
    player = 'scissors';
    playTheRound(player);
    playTheGame();
})




