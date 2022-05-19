function solve(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] > input[j + 1]) {
                let tmp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = tmp;
            }
        }
    }
    console.log(input[0] + " " + input[1]);
}

solve([30, 15, 50, 5])

