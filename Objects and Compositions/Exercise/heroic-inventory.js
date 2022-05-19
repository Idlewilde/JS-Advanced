function solve (input){

    let heroicInventory=[];
    let heroInfo=[];
    let heroItems=[];
    let hero={};

    for(i=0;i<input.length;i++){
        let [name, level, items] = input[i].split(' / ');
        level=Number(level);
        items=items ? items.split(', ') : [];
        heroicInventory.push({name, level, items});
    }

    console.log(JSON.stringify(heroicInventory));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])