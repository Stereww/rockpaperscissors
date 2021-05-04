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

computerPlay();
playerPlay();

function result(computer, player) {
    if (computer === "scissors" && player === "scissors"){
        console.log("it's a tie");
    }
    else if (computer === "scissors" && player === "paper"){
        console.log("computer wins");
    }
    else if (computer === "scissors" && player === "rock"){
        console.log("you win");
    }
    else if (computer === "rock" && player === "scissors"){
        console.log("computer wins");
    }
    else if (computer === "rock" && player === "rock"){
        console.log("it's a tie");
    }
    else if (computer === "rock" && player === "paper"){
        console.log("you win");
    }
    else if (computer === "paper" && player === "scissors"){
        console.log("you win");
    }
    else if (computer === "paper" && player === "paper"){
        console.log("it's a tie");
    }
    else {
        console.log("computer wins");
    }
}

result(computer, player);
