function robot() {


    let availability = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, flavour: 3, fat: 7 },
        eggs: { protein: 5, flavour: 1, fat: 1 },
        turkey: { protein: 10, carbohydrate: 10, flavour: 10, fat: 10 }
    };

    function restock(element, quantity) {
        availability[element] += quantity;
        return 'Success';
    }

    function cook(recipe, quantity) {
        let remainingStorage = {};
        for (let element in recipes[recipe]) {
            const remaining = availability[element] - recipes[recipe][element] * quantity;
            if (remaining < 0) { return `Error: not enough ${element} in stock`; }
            else { remainingStorage[element] = remaining; }
        }
        Object.assign(availability, remainingStorage);
        return 'Success';
    }

    function report() {
        return `protein=${availability['protein']} carbohydrate=${availability['carbohydrate']} fat=${availability['fat']} flavour=${availability['flavour']}`;
    }

    function control(input) {
        let [command, item, quantity] = input.split(' ');
        quantity = Number(quantity)
        if (command === 'report') { return report(); }
        else if (command == 'restock') { return restock(item, quantity); }
        else if (command == 'prepare') { return cook(item, quantity); }
    }

    return control;
}

let manager = robot();

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("report"));