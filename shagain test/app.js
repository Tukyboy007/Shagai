var move1 = 0,
    move2 = 0,
    playerMoveCount1 = 0,
    playerMoveCount2 = 0,
    winner;
const pic1 = localStorage.getItem("playerIcon1"),
    pic2 = localStorage.getItem("playerIcon2"),
    gameName1 = localStorage.getItem("player1Name"),
    gameName2 = localStorage.getItem("player2Name");

document.querySelector(".iconName1").innerHTML = gameName1;
document.querySelector(".iconName11").innerHTML = gameName2;
document.querySelector(".pic1").src = pic1;
document.querySelector(".pic2").src = pic2;

function sh(activeP) {
    var p1Score = 0,
        p2Score = 0,
        allScore = [],
        nextPlayer1S = 0,
        nextPlayer2S = 0;;
    const be1 = document.getElementById("b1");
    const be2 = document.getElementById("b2");
    const be3 = document.getElementById("b3");
    const be4 = document.getElementById("b4");
    const p1S = document.querySelector(".s1");
    const p2S = document.querySelector(".s2");
    const b1Title = document.querySelector(".br1Title");
    const b2Title = document.querySelector(".br2Title");
    const b3Title = document.querySelector(".br3Title");
    const b4Title = document.querySelector(".br4Title");
    const pShag1 = document.querySelector(".player1");
    const pShag2 = document.querySelector(".player2");
    shag1 = Math.floor((Math.random() * 4) + 1);
    shag2 = Math.floor((Math.random() * 4) + 1);
    shag3 = Math.floor((Math.random() * 4) + 1);
    shag4 = Math.floor((Math.random() * 4) + 1);
    switch (shag1) {
        case 1:
            b1Title.textContent = "Хонь";
            break;
        case 2:
            b1Title.textContent = "Ямаа";
            break;
        case 3:
            b1Title.textContent = "Тэмээ";
            break;
        case 4:
            b1Title.textContent = "Морь";
            break;
    }
    switch (shag2) {
        case 1:
            b2Title.textContent = "Хонь";
            break;
        case 2:
            b2Title.textContent = "Ямаа";
            break;
        case 3:
            b2Title.textContent = "Тэмээ";
            break;
        case 4:
            b2Title.textContent = "Морь";
            break;
    }
    switch (shag3) {
        case 1:
            b3Title.textContent = "Хонь";
            break;
        case 2:
            b3Title.textContent = "Ямаа";
            break;
        case 3:
            b3Title.textContent = "Тэмээ";
            break;
        case 4:
            b3Title.textContent = "Морь";
            break;
    }
    switch (shag4) {
        case 1:
            b4Title.textContent = "Хонь";
            break;
        case 2:
            b4Title.textContent = "Ямаа";
            break;
        case 3:
            b4Title.textContent = "Тэмээ";
            break;
        case 4:
            b4Title.textContent = "Морь";
            break;
    }

    be1.src = shag1 + ".png";
    be2.src = shag2 + ".png";
    be3.src = shag3 + ".png";
    be4.src = shag4 + ".png";
    allScore.push(shag1, shag2, shag3, shag4);
    if (move1 > 15) {
        pShag1.src = "p2.png";
    }
    if (move2 > 15) {
        pShag2.src = "p2.png";
    }
    if (activeP == 1) {
        playerMoveCount1++;
        playerMoveCount2 = 0;
        for (let i = 0; i < 4; i++) {
            if (allScore[i] == 4) {
                move1++;
                nextPlayer1S++;
            }
        };
        if (move1 < 10 || move1 == 0) {
            p1S.textContent = "0" + move1;
        } else {
            p1S.textContent = move1;

        }
        if (nextPlayer1S == 0 || playerMoveCount1 == 5) {
            nextP(activeP);
        } else {
            conP(activeP);
        }
        if (move1 > 15) {
            pShag1.src = "p2.png";
        }
        // if (move1 !== move2) {
        pShag1.classList.add("pos" + move1);
        // } else {
        //     pShag1.classList.add("pos" + move1 + "a");
        // }
        if (move1 > 30) {
            location.replace('finish.html');
            winner = pic1;
            localStorage.setItem("winner", winner);
            localStorage.setItem("winnerName", gameName1);
        }
        console.log("Toglogch1 = " + playerMoveCount1);
    } else {
        playerMoveCount2++;
        playerMoveCount1 = 0;
        console.log("Toglogch2 = " + playerMoveCount2);
        var nextPlayer2S = 0;
        for (let i = 0; i < 4; i++) {
            if (allScore[i] == 4) {
                move2++;
                nextPlayer2S++;
            }
        };
        if (move2 < 10 || move2 == 0) {
            p2S.textContent = "0" + move2;
        } else {
            p2S.textContent = move2;

        }
        if (nextPlayer2S == 0 || playerMoveCount2 == 5) {
            nextP(activeP);
        } else {
            conP(activeP);
        }
        if (move2 > 15) {
            pShag2.src = "p2.png";
        }
        // if (move1 !== move2) {
        pShag2.classList.add("pos" + move2);
        // } else {
        //     pShag2.classList.add("pos" + move2 + "a");
        // }
        if (move2 >= 30) {
            location.replace('finish.html');
            winner = pic2;
            localStorage.setItem("winner", winner);
            localStorage.setItem("winnerName", gameName2);
        }
    }

}

function nextP(activeP) {
    playerButton1 = document.querySelector(".p1");
    playerButton2 = document.querySelector(".p2");
    if (activeP == 1) {
        playerButton1.classList.add("uActive");
        playerButton2.classList.remove("uActive");
    } else {
        playerButton2.classList.add("uActive");
        playerButton1.classList.remove("uActive");
    }
}

function conP(activeP) {
    playerButton1 = document.querySelector(".p1");
    playerButton2 = document.querySelector(".p2");
    if (activeP == 1) {
        playerButton2.classList.add("uActive");
        playerButton1.classList.remove("uActive");
    } else {
        playerButton1.classList.add("uActive");
        playerButton2.classList.remove("uActive");
    }
}

function p1() {
    activeP = 1;
    sh(activeP);

}

function p2() {
    activeP = 2;
    sh(activeP);
}

function beg() {
    location.replace("page2.html ");
}

function res() {
    location.replace("index.html");
}