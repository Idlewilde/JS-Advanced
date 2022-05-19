function solve(input) {
    input = input.map(x => x.split(' ').map(Number));
    let diagonal1 = [];
    let diagonal2 = [];

    let initialCol = 0;
    for (let array of input) {
        diagonal1.push(+array[initialCol]);
        initialCol++;
    }

    initialCol = input[0].length - 1;
    for (let array of input) {

        diagonal2.push(+array[initialCol]);
        initialCol--;
    }

    sum1 = diagonal1.reduce((a, b) => a + b, 0);
    sum2 = diagonal2.reduce((a, b) => a + b, 0);

    if (sum1 === sum2) {
        let initialCol1 = 0;
        let initialCol2 = input[0].length - 1;
        for (let r = 0; r < input.length; r++) {
            for (let c = 0; c < input[r].length; c++) {
                if (c !== initialCol1 && c !== initialCol2) { input[r][c] = sum1; }
            }
            initialCol1++; initialCol2--;
        }
    }

    for (let array of input) {
        console.log(array.join(' '));
    }

}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);