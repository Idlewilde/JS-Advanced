function registerModels(input) {

    let brandMap = new Map();

    for (let i = 0; i < input.length; i++) {
        let info = input[i].split(' | ');
        let brand = info[0];
        let model = info[1];
        let count = Number(info[2]);
        let modelMap = new Map();
        modelMap.set(model, count);

        if (brandMap.has(brand)) {
            if (brandMap.get(brand).has(model)) { brandMap.get(brand).set(model, brandMap.get(brand).get(model) + count) }
            else { brandMap.get(brand).set(model, count) }
        }
        else { brandMap.set(brand, modelMap); }
    }

    for (let [key, value] of brandMap) {
        console.log(`${key}`);
        for (let [key1, value1] of value) {
            console.log(`###${key1} -> ${value1}`);
        }
    }
}

registerModels(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)