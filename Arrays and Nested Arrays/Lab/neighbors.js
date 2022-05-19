function solve(input) {
    let count = 0;

    for (let r = 0; r < input.length; r++) {
        for (let c = 0; c < input[r].length; c++) {
            let element = input[r][c];
            if (r !== input.length - 1 && element === input[r + 1][c]) { count++; }
            if (c !== r.length - 1 && element === input[r][c + 1]) { count++; }
        }

    }


    return count;
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
)