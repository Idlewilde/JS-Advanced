function createPerson(firstName, lastName) {
    let result = {
        firstName,
        lastName,
        fullName: ``
    };

    Object.defineProperty(result, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(value) {
            let [first, last] = value.split(' ')
            this.firstName = first;
            this.lastName = last
        },
        configurable: true,
        enumerable: true
    });

    return result;
}

let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName); // Simon
console.log(person.lastName); // Simpson