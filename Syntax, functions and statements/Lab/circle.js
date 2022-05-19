function solve(input) {
    let typeOf = typeof (input);
    if (typeOf === 'number') {
        let result = input * input * Math.PI;
        console.log(result.toFixed(2))
    }
    else { console.log('We can not calculate the circle area, because we receive a ' + typeOf + '.') }
}