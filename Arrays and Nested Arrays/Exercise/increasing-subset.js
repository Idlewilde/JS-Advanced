function solve(input) {
    let result = [];
    result.push(input[0]);

    for (let i = 1; i < input.length; i++) {
        if (input[i] >= result[result.length - 1]) { result.push(input[i]); }
    }

    return result;
}