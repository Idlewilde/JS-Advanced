function solve(input) {
    let rows = input[0];
    let cols = input[1];
    let row = input[2];
    let col = input[3];

    let matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols).fill(-1);
    }

    matrix[row][col] = 1;

    let identifier = 1;

    let inBounds = function inBounds(row, col, rows, cols) {
        if (row >= 0 && row < rows && col >= 0 && col < cols) { return true; }
        else { return false; }
    }

    for (let m = 0; m < Math.max(rows, cols); m++) {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] === identifier) {
                    if (inBounds(i, j + 1, rows, cols)) {
                        if (matrix[i][j + 1] === -1) { matrix[i][j + 1] = identifier + 1; }
                    }
                    if (inBounds(i + 1, j + 1, rows, cols)) {
                        if (matrix[i + 1][j + 1] === -1) { matrix[i + 1][j + 1] = identifier + 1; }
                    }
                    if (inBounds(i + 1, j, rows, cols)) {
                        if (matrix[i + 1][j] === -1) { matrix[i + 1][j] = identifier + 1; }
                    }
                    if (inBounds(i, j - 1, rows, cols)) {
                        if (matrix[i][j - 1] === -1) { matrix[i][j - 1] = identifier + 1; }
                    }
                    if (inBounds(i - 1, j - 1, rows, cols)) {
                        if (matrix[i - 1][j - 1] === -1) { matrix[i - 1][j - 1] = identifier + 1; }
                    }
                    if (inBounds(i - 1, j, rows, cols)) {
                        if (matrix[i - 1][j] === -1) { matrix[i - 1][j] = identifier + 1; }
                    }
                    if (inBounds(i - 1, j + 1, rows, cols)) {
                        if (matrix[i - 1][j + 1] === -1) { matrix[i - 1][j + 1] = identifier + 1; }
                    }
                    if (inBounds(i + 1, j - 1, rows, cols)) {
                        if (matrix[i + 1][j - 1] === -1) { matrix[i + 1][j - 1] = identifier + 1; }
                    }
                }
            }
        }
        identifier++;
    }

    for (let array of matrix) {
        console.log(array.join(' '));
    }

}

solve([4, 4, 0, 0])
solve([5, 5, 2, 2])
solve([3, 3, 2, 2])