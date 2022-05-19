function solve(input) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let firstPlayer = true;
    let h1;
    let h2;
    let h3;
    let v1;
    let v2;
    let v3;
    let d1;
    let d2;
    let availableSpots = 9;

    for (i = 0; i < input.length; i++) {

        let row = +input[i][0];
        let col = +input[i][2];

        if (dashboard[row][col] === false && firstPlayer) { dashboard[row][col] = 'X'; availableSpots--; firstPlayer = false; }
        else if (dashboard[row][col] === false && !firstPlayer) { dashboard[row][col] = 'O'; availableSpots--; firstPlayer = true; }
        else { console.log("This place is already taken. Please choose another!") }

        h1 = '' + dashboard[0][0] + dashboard[0][1] + dashboard[0][2];
        h2 = '' + dashboard[1][0] + dashboard[1][1] + dashboard[1][2];
        h3 = '' + dashboard[2][0] + dashboard[2][1] + dashboard[2][2];
        v1 = '' + dashboard[0][0] + dashboard[1][0] + dashboard[2][0];
        v2 = '' + dashboard[0][1] + dashboard[1][1] + dashboard[2][1];
        v3 = '' + dashboard[0][2] + dashboard[1][2] + dashboard[2][2];
        d1 = '' + dashboard[0][0] + dashboard[1][1] + dashboard[2][2];
        d2 = '' + dashboard[0][2] + dashboard[1][1] + dashboard[2][0];

        if (h1 == 'XXX' || h2 == 'XXX' || h3 == 'XXX' || d1 == 'XXX' || d2 == 'XXX' || v1 == 'XXX' || v2 == 'XXX' || v3 == 'XXX') {
            console.log('Player X wins!'); break;
        }
        else if (h1 == 'OOO' || h2 == 'OOO' || h3 == 'OOO' || d1 == 'OOO' || d2 == 'OOO' || v1 == 'OOO' || v2 == 'OOO' || v3 == 'OOO') {
            console.log('Player O wins!'); break;
        }

        if (availableSpots === 0) { console.log('The game ended! Nobody wins :('); break; }
    }

    for (let array of dashboard) {
        console.log(array.join('	'));
    }
}

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]


)