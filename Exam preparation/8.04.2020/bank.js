class Bank {

    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
        this.transactions = {};
    }
    newCustomer(customer) {
        for (let i = 0; i < this.allCustomers.length; i++) {
            if (this.allCustomers[i].personalId == customer.personalId&&this.allCustomers[i].firstName == customer.firstName&&this.allCustomers[i].lastName == customer.lastName) {
                throw new Error(`${customer['firstName']} ${customer['lastName']} is already our customer!`)
            }
        }
        
        this.allCustomers.push(customer);

        let object = {};
        let id = customer.personalId;
        object[id] = [];
        Object.assign(this.transactions, object);

        return customer
    }

    depositMoney(personalId, amount) {
        let existingCustomer = false;
        let currentCustomer = {};
        for (let i = 0; i < this.allCustomers.length; i++) {
            if (this.allCustomers[i]['personalId'] == personalId) { existingCustomer = true; currentCustomer = this.allCustomers[i]; }
        }
        if (!existingCustomer) { throw new Error('We have no customer with this ID!'); }

        let firstName = currentCustomer.firstName;
        let lastName = currentCustomer.lastName;

        if(!currentCustomer.hasOwnProperty('totalMoney')){currentCustomer.totalMoney=0;}

        currentCustomer.totalMoney+=amount;

        let identifier = this.transactions[personalId].length + 1;
        this.transactions[personalId].splice(0, 0, `${identifier}. ${firstName} ${lastName} made deposit of ${amount}$!`);


        return `${currentCustomer.totalMoney}$`
    }
    withdrawMoney(personalId, amount) {
        let existingCustomer = false;
        let currentCustomer = {};
        for (let i = 0; i < this.allCustomers.length; i++) {
            if (this.allCustomers[i]['personalId'] == personalId) { existingCustomer = true; currentCustomer = this.allCustomers[i]; }
        }
        if (!existingCustomer) { throw new Error('We have no customer with this ID!'); }
        let firstName = currentCustomer.firstName;
        let lastName = currentCustomer.lastName;

        if(!currentCustomer.hasOwnProperty('totalMoney')){currentCustomer.totalMoney=0;}
        if (currentCustomer.totalMoney < amount) {
            throw new Error(`${firstName} ${lastName} does not have enough money to withdraw that amount!`);
        }

        currentCustomer.totalMoney-=amount;

        let identifier = this.transactions[personalId].length + 1;
        this.transactions[personalId].splice(0, 0, `${identifier}. ${firstName} ${lastName} withdrew ${amount}$!`);


        return `${currentCustomer.totalMoney}$`

    }

    customerInfo(personalId) {
        let existingCustomer = false;
        let currentCustomer = {};
        for (let i = 0; i < this.allCustomers.length; i++) {
            if (this.allCustomers[i]['personalId'] == personalId) { existingCustomer = true; currentCustomer = this.allCustomers[i]; }
        }
        if (!existingCustomer) { throw new Error('We have no customer with this ID!'); }
        let firstName = currentCustomer.firstName;
        let lastName = currentCustomer.lastName;

        let output = '';
        output += `Bank name: ${this._bankName}\n`
        output += `Customer name: ${firstName} ${lastName}\n`
        output += `Customer ID: ${personalId}\n`
        output += `Total Money: ${currentCustomer.totalMoney}$\n`
        output += `Transactions:\n`
        for (let i = 0; i < this.transactions[personalId].length; i++) {
            output += `${this.transactions[personalId][i]}\n`
        }
        return output.trim();
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

console.log(bank.depositMoney(6233267, 250));
console.log(bank.depositMoney(6233267, 250));
console.log(bank.depositMoney(4151596,555));

console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.withdrawMoney(6233267, 325));
console.log(bank.customerInfo(6233267));


