let computer;
let player;
function computerPlay() {
    let rand = Math.random();
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

function playerPlay() {
    player = prompt('what is your play?');
};

let finish;

function result(computer, player) {
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

let playerScore = 0;
let computerScore = 0;
let bestOf = prompt('how many games do you want in your series?');
let winningScore = Math.ceil(bestOf/2);

while (1){
    computerPlay();
    playerPlay();
    result(computer, player);
    //console.log(finish);
    if (finish === "you win"){
        playerScore++;
        //console.log("player score:")
        //console.log(playerScore);
    }
    else if (finish === "computer wins"){
        computerScore++;
        //console.log("computer score:")
        //console.log(computerScore);
    }
    else {
    }

    if (playerScore >= winningScore){
        console.log("the player wins it all!");
        break;
    }
    else if (computerScore >= winningScore){
        console.log("the computer wins it all!");
        break;
    }
    else{

    }
}
