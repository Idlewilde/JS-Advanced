function solve(array, n) {
    let result = [];
    result.push(array[0]);

    for (let i = 1; i < array.length; i++) {
        if (i % n === 0) { result.push(array[i]); }
    }
    return result;
}

solve(['5',
    '20',
    '31',
    '4',
    '20'], 2)