function subSum (array,startIndex,endIndex){
    let type = typeof(array);
    if(type!=='object'){return NaN;}
    if(startIndex<0){startIndex=0;}
    if(endIndex>array.length-1){endIndex=array.length-1;}
    let sum=0;

    for(i=startIndex;i<=endIndex;i++){
        let number = array[i];
        if(typeof(array[i])!='number'){return NaN;}
        sum+=array[i];
    }

    return sum;
}

subSum([10, 20, 30, 40, 50, 60], 3, 300)