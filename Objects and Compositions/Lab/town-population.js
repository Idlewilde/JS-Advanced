function solve (input){
    let towns = {};

    for (info of input) {
        let infoArr = info.split(' <-> ');
        let town = infoArr[0];
        let population=Number(infoArr[1]);
        if(towns[town]!=undefined){towns[town]+=population}
        else{
        towns [town] = population;}

    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }

}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)