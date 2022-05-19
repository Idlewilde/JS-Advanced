function solve(input) {

    input.sort((a, b) => a - b);
    result = [];
    let isSmall = true;
    let length = input.length;

    for (let i = 0; i < length; i++) {
        if (isSmall) { result.push(input.shift()); isSmall = false; }
        else { result.push(input.pop()); isSmall = true; }
    }


    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])