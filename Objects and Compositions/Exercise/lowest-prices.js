function solve(input) {
    let result = {};

    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (result[product] != undefined) {
            if (result[product].price > price) { result[product].price = price; result[product].town = town }
        }
        else {
            result[product] = { price, town };
        }
    }

    for (const entry in result) {
        console.log(`${entry} -> ${result[entry].price} (${result[entry].town})`);
    }



}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)