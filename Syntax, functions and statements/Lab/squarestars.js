function solve(num){
    if(num===null){
        for(let i=0; i<num; i++){
            console.log('* '.repeat(5));}
    }else{
    for(let i=0; i<num; i++){
        console.log('* '.repeat(num));
    }}
}

solve(4);