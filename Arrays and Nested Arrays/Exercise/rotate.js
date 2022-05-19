function solve(input, index) {
    for (let i = 1; i <= index; i++) {
        let element = input.pop();
        input.unshift(element)
    }
    console.log(input.join(' '));
}

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
)