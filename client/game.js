// pos vars
let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let counter = 0;
let xWin = false;
let oWin = false;

function placeMark(id) {
    console.log(counter);
    if (counter == 8 && xWin == false && oWin == false) {
        console.log("Hola?");
        
        document.getElementById('mensaje').innerHTML = "TIED!";
        document.getElementById('reset').style.display = 'block';
    }

    if (counter % 2 == 0) {
        if (positions[parseInt(id) - 1] != 'X' && positions[parseInt(id) - 1] != 'O') {
            document.getElementById(id).innerHTML = 'X';
            positions[parseInt(id) - 1] = 'X';
            checkWin()
            counter += 1;
        }
    } else {
        if (positions[parseInt(id) - 1] != 'X' && positions[parseInt(id) - 1] != 'O') {
            document.getElementById(id).innerHTML = 'O';
            positions[parseInt(id) - 1] = 'O';
            checkWin()
            counter += 1;
        }
    }
}

function checkWin() {
    if (positions[0]+positions[1]+positions[2] == 'XXX' || positions[3]+positions[4]+positions[5] == 'XXX' || positions[6]+positions[7]+positions[8] == 'XXX' ||
    positions[0]+positions[3]+positions[6] == 'XXX' || positions[1]+positions[4]+positions[7] == 'XXX' || positions[2]+positions[5]+positions[8] == 'XXX' ||
    positions[0]+positions[4]+positions[8] == 'XXX' || positions[2]+positions[4]+positions[6] == 'XXX') {
        xWin = true;
        document.getElementById('mensaje').innerHTML = "X WIN!";
        document.getElementById('reset').style.display = 'block';
    } else if (positions[0]+positions[1]+positions[2] == 'OOO' || positions[3]+positions[4]+positions[5] == 'OOO' || positions[6]+positions[7]+positions[8] == 'OOO' ||
    positions[0]+positions[3]+positions[6] == 'OOO' || positions[1]+positions[4]+positions[7] == 'OOO' || positions[2]+positions[5]+positions[8] == 'OOO' ||
    positions[0]+positions[4]+positions[8] == 'OOO' || positions[2]+positions[4]+positions[6] == 'OOO') {
        oWin = true;
        document.getElementById('mensaje').innerHTML = "O WIN!";
        document.getElementById('reset').style.display = 'block';
    }
}

function playAgain() {
    document.getElementById('reset').style.display = 'none';
    document.getElementById('mensaje').innerHTML = " ";
    counter = 0;
    xWin = false;
    oWin = false;

    for(let i=1; i < 10; i++) {
        document.getElementById(String(i)).innerHTML = " ";
    }

    for(let i=0; i<9; i++) {
        positions[i] = ' ';
    }
}