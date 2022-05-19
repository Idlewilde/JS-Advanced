function solve(input) {
    let array = input;
    let string = '';

    for (let i = 0; i < array.length; i++) {
        if (i === 0 || i % 2 === 0) { string = string + array[i] + ' '; }
    }

    console.log(string.trim())
}

solve(['20', '30', '40', '50', '60'])