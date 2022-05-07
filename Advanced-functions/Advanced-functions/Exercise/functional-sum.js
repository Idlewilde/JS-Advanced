function add(number1){
    let sum =0;

    function inner (number2){
        sum+=number2;
        return inner;
    }

    inner.toString = ()=>{return sum;}

    return inner(number1);
}

console.log(add(1)(6)(-3).toString());

