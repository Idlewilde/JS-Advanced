function solve(fruit,grams,price){
    let gramsInKilos=grams/1000;
    let finalPrice = (gramsInKilos*price).toFixed(2);
    console.log('I need $'+finalPrice+' to buy '+gramsInKilos.toFixed(2)+' kilograms '+fruit+'.')
}