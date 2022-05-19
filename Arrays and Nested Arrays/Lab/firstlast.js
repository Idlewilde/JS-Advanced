function solve(array) {
    let sum = 0;
    if (array.length > 1) {
        sum = Number(array[0]) + Number(array[array.length - 1])
    }
    else { sum = array[0]; }

    console.log(sum);
}

solve(['20', '30', '40'])