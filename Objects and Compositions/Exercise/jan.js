function solve(input) {
    let nums = [];
    let ops = [];

    for (i = 0; i < input.length; i++) {
        if (isNaN(input[i])) { ops.push(input[i]) }
        else { nums.push(input[i]) }
    }

    let result = 0;

    if (nums.length > ops.length + 1) { console.log('Error: too many operands!') }
    else if (nums.length < ops.length + 1) { console.log('Error: not enough operands!') }
    else {
        let num2 = nums.pop();
        let num1 = nums.pop();
        for (const operation of ops) {
            if (operation === '*') { result = num1 * num2; }
            else if (operation === '+') { result = num1 + num2; }
            else if (operation === '/') { result = num1 / num2; }
            else if (operation === '-') { result = num1 - num2; }

            if (nums.length == 0) { break; }
            else { num2 = result; num1 = nums.pop(); }

        }

        console.log(result);
    }

}


solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);