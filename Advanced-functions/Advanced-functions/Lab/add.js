function solution(number) {

    let result = number;
    return (outsideNum) => result + outsideNum;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
