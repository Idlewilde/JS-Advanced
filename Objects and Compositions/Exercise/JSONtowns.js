function solve(input){
    let result = [];

    input.shift();

    
    

    for (const inputLine of input) {
        let arr=inputLine.split(/\s*\|\s*/g);
        let ctown = arr[1];
        let clatitude = Number(arr[2]).toFixed(2);
        let clongitude = Number(arr[3]).toFixed(2);
        
        let object = {Town:ctown,Latitude:+clatitude,Longitude:+clongitude};
        result.push(object);
}
console.log(JSON.stringify(result))

}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)

