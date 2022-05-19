function solve(input, pie1, pie2) {
    let firstIndex = input.indexOf(pie1);
    let secondIndex = input.indexOf(pie2);
    return input.slice(firstIndex, secondIndex + 1);
}

solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
)