function solve(car) {
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };


    let customized = {
        model: car.model,
        engine: { power: 0, volume: 0 },
        carriage: { type: car.carriage, color: car.color },
        wheels: [1, 1, 1, 1]
    };

    if (car.power <= 90) { customized.engine = smallEngine; }
    else if (car.power <= 120) { customized.engine = normalEngine; }
    else { customized.engine = monsterEngine; }

    if (car.wheelsize % 2 == 0) { customized.wheels.fill(car.wheelsize - 1); }
    else { customized.wheels.fill(car.wheelsize); }

    return customized;




}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);