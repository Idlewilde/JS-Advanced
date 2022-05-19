function solve(input) {
    let newArr = [];
    for (i = 0; i <= input.length; i++) {
        if (i % 2 == 1) { newArr.push(input[i] * 2); }
    }
    newArr.reverse();

    console.log(newArr.join(" "));
}

solve([10, 15, 20, 25]);