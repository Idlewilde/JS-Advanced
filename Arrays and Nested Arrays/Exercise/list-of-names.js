function solve(input) {
    let index = 1;

    input.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < input.length; i++) {
        console.log(index + '.' + input[i]); index++;
    }
}

solve(["John", "Bob", "Christina", "Ema"]);