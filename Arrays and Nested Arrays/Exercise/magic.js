function solve(input) {
    let isEqual = true;
    let sum = input[0].reduce((sum, a) => sum + a, 0);

    for (let i = 1; i < input.length; i++) {
        let currSum = input[i].reduce((partialSum, a) => partialSum + a, 0);
        if (currSum !== sum) { isEqual = false; break; }
    }

    if (isEqual) {
        for (let c = 0; c < input[0].length; c++) {
            let currentSum = 0;
            for (let r = 0; r < input.length; r++) {
                currentSum += input[r][c];
            }
            if (currentSum !== sum) { isEqual = false; break; }
        }
    }
    return isEqual;
}

solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
)