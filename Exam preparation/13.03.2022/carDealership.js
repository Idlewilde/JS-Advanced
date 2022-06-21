class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model.trim().length > 0 && horsepower >= 0 && price >= 0 && mileage >= 0 && Number.isInteger(horsepower)) {
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        }
        else { throw new Error("Invalid input!"); }
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(e => e.model == model);
        if (car) {
            let mileage = car.mileage;
            if (mileage <= desiredMileage) {
                const carIndex = this.availableCars.indexOf(car);
                this.availableCars.splice(carIndex, 1); this.soldCars.push(car);
            }
            else if (mileage - desiredMileage <= 40000) {
                car.price = car.price * 0.95;
                const carIndex = this.availableCars.indexOf(car);
                this.availableCars.splice(carIndex, 1);
                this.soldCars.push(car);
            }
            else {
                car.price = car.price * 0.90;
                const carIndex = this.availableCars.indexOf(car);
                this.availableCars.splice(carIndex, 1);
                this.soldCars.push(car);
            }
            this.totalIncome += car.price;
            return `${model} was sold for ${car.price.toFixed(2)}$`
        }
        else { throw new Error(`${model} was not found!`); }
    }
    currentCar() {
        let output = `-Available cars:\n`;
        if (this.availableCars.length <= 0) { return `There are no available cars` }
        else {
            this.availableCars.forEach(e => output += `---${e.model} - ${e.horsepower} HP - ${e.mileage.toFixed(2)} km - ${e.price.toFixed(2)}$\n`);
            return output.trim();
        }
    }
    salesReport(criteria) {
        let output = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n`
        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower).forEach(e => output += `---${e.model} - ${e.horsepower} HP - ${e.price.toFixed(2)}$\n`);
            return output.trim();
        }
        else if (criteria == 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
            this.soldCars.forEach(e => output += `---${e.model} - ${e.horsepower} HP - ${e.price.toFixed(2)}$\n`)
            return output.trim();
        }
        else { throw new Error("Invalid criteria!"); }
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
console.log(dealership.salesReport("model"));







