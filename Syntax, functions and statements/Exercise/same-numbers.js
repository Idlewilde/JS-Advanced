function solve(number) {

    const num = number.toString();
    let numLength = num.length;
    let firstNum = Number(num[0]);
    let sum = 0;
    let allEqual = true;

    for (let i = 1; i < numLength; i++) {
        let currentNum = Number(num[i]);
        sum += currentNum;
        if (currentNum !== firstNum) { allEqual = false; }

    }
    sum += firstNum
    console.log(allEqual);
    console.log(sum);
}