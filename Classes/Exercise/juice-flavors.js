function makeBottles(juice) {
    let map = new Map();
    let map2 = new Map();

    for (let i = 0; i < juice.length; i++) {
        let currentJuice = juice[i].split(' => ');
        if (map.has(currentJuice[0])) {
            map.set(currentJuice[0], map.get(currentJuice[0]) + Number(currentJuice[1]));
        }
        else {
            map.set(currentJuice[0], Number(currentJuice[1]))
        }
        if (map.get(currentJuice[0]) >= 1000 && !map2.has(currentJuice[0])) { map2.set(currentJuice[0], 0); }
    }

    for (let [key, value] of map) {
        if (map2.has(key)) {
            map2.set(key, Math.floor(value / 1000))
        }
    }

    for (let [key, value] of map2) {
        console.log(key + ' => ' + value)
    }
}

makeBottles(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);
