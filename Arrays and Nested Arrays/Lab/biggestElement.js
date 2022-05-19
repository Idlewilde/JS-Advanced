function solve(input) {
    let biggest = -100000000;
    for (let array of input) {
        for (let el of array) {
            if (el > biggest) { biggest = el; }
        }
    }
    return biggest;
}