function solve(num1,num2){
    let smallerNum=Math.min(num1,num2);
    let divisor=0;

    for(let i=1;i<=smallerNum;i++){
        if(num1 % i ===0 && num2 % i ===0){divisor = i;}
    }

    console.log(divisor)
}