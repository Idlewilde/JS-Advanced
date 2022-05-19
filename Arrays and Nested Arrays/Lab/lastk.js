function solve(n, k) {
    let array = [];
    array.length = n;
    array[0] = 1;

    for (i = 1; i < array.length; i++) {
        array[i] = 0;
    }

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = i - k; j < n; j++) {
            if (j >= 0) {
                sum = sum + Number(array[j]);
            }
        }
        array[i] = sum;
    }

    return array;

}
solve(8, 2);