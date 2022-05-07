function getFibonator() {
    let x = 1;
    let y = 1;
    let z = 0;
    return function getNext() {
        [z, x, y] = [x, y, x + y];
        return z;
    };
}

let fib = getFibonator();
console.log(fib()); 
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());


