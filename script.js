let tern = "X";
let scoreX = 0;
let scoreO = 0;
let isWinner = false;
let array = document.getElementsByClassName("box");
let winner = document.getElementById("winner");
let resetBtn = document.getElementById("reset-btn");

function plot(element) {
    let plotBase = document.getElementById(element);
    let innerPlotBase = plotBase.innerHTML
    if (innerPlotBase != "") {
        console.log("Box Not Empty!")
        return;
    }
    plotBase.innerHTML = tern;
    checkWinner(tern);
    if (isWinner == false) {
        changeTern(tern);
    }
}

function changeTern(player) {
    if (player == "X") {
        tern = "O";
        let playerO = document.getElementById("score-blue");
        let playerX = document.getElementById("score-red");
        playerX.style.color = "white";
        playerX.style.backgroundColor = "red";
        playerO.style.color = "blue";
        playerO.style.backgroundColor = "#939eff8e";
    }
    else {
        tern = "X";
        let playerX = document.getElementById("score-red");
        let playerO = document.getElementById("score-blue");
        playerO.style.color = "white";
        playerO.style.backgroundColor = "blue";
        playerX.style.color = "red";
        playerX.style.backgroundColor = "#ff93938e";
    }
}

function checkWinner(player) {
    if ((array[0].innerHTML == player && array[1].innerHTML == player && array[2].innerHTML == player) ||
        (array[3].innerHTML == player && array[4].innerHTML == player && array[5].innerHTML == player) ||
        (array[6].innerHTML == player && array[7].innerHTML == player && array[8].innerHTML == player) ||
        (array[0].innerHTML == player && array[3].innerHTML == player && array[6].innerHTML == player) ||
        (array[1].innerHTML == player && array[4].innerHTML == player && array[7].innerHTML == player) ||
        (array[2].innerHTML == player && array[5].innerHTML == player && array[8].innerHTML == player) ||
        (array[0].innerHTML == player && array[4].innerHTML == player && array[8].innerHTML == player) ||
        (array[2].innerHTML == player && array[4].innerHTML == player && array[6].innerHTML == player)) {
        winnerAlert(player);
        isWinner = true;
        resetGame(player);
    }
    else if (array[0].innerHTML != "" && array[1].innerHTML != "" && array[2].innerHTML != "" &&
        array[3].innerHTML != "" && array[4].innerHTML != "" && array[5].innerHTML != "" &&
        array[6].innerHTML != "" && array[7].innerHTML != "" && array[8].innerHTML != "") {
        winner.innerHTML = "It's a Tie!";
        resetGame(player);
    }
}

function resetGame(player) {
    for (let i = 0; i < array.length; i++) {
        array[i].innerHTML = "";
    }
    isWinner = false;
    tern = player == "X" ? "O" : "X";
}

function winnerAlert(player) {
    let winner = document.getElementById("winner");
    winner.innerHTML = "Player " + player + " Wins!";
    winner.style.color = "white";
    winner.style.display = "flex";
    winner.style.justifyContent = "center";
    winner.style.alignItems = "center";
    winner.style.zIndex = "1000";
    if (player == "X") {
        winner.style.backgroundColor = "red";
        scoreX++;
        document.getElementById("score-x").innerHTML = scoreX;
    }
    else {
        winner.style.backgroundColor = "blue";
        scoreO++;
        document.getElementById("score-o").innerHTML = scoreO;
    }
    setTimeout(() => {
        winner.style.display = "none";
        winner.style.backgroundColor = "transparent";
        winner.style.zIndex = "-1000";
    }, 2000);
}

function resetBtnClick() {
    console.log("Reset Button Clicked!");
    resetGame(tern);
    let winner = document.getElementById("winner");
    winner.style.display = "none";
    winner.style.backgroundColor = "transparent";
    winner.style.zIndex = "-1000";
}