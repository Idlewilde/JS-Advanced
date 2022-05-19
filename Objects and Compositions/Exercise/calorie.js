function solve(input) {

    let properties = [];
    let indexpr = 0;
    let calories = [];
    let indexcal = 0;


    for (let i = 0; i < input.length; i++) {
        if (i == 0 || i % 2 == 0) {
            properties[indexpr] = input[i]; indexpr++;
        }
        else { calories[indexcal] = Number(input[i]); indexcal++; }


    }

    let caloriesLog = {

    };
    let prop = '';
    let cal = 0;
    for (i = 0; i < calories.length; i++) {
        prop = properties[i];
        cal = calories[i];
        caloriesLog[prop] = cal;
    }

    console.log(caloriesLog)





}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])