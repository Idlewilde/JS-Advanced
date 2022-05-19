function solve(input) {
    let diagonal1 = [];
    let diagonal2 = [];

    let initialCol = 0;
    for (let array of input) {
        diagonal1.push(array[initialCol]);
        initialCol++;
    }

    initialCol = input[0].length - 1;
    for (let array of input) {

        diagonal2.push(array[initialCol]);
        initialCol--;
    }

    sum1 = diagonal1.reduce((a, b) => a + b, 0);
    sum2 = diagonal2.reduce((a, b) => a + b, 0);

    console.log('' + sum1 + ' ' + sum2)



}

solve([[20, 40], [10, 60]])
solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)