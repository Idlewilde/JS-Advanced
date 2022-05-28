class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product){
        let [name,price]=product;
        if(price>this.budget){throw new Error("Not enough money to buy this product");}
            this.products.push(name);
            this.budget-=price;
            return `You have successfully bought ${name}!`
        
    }

    recipes(recipe){
        let allPresent = true;

        let recipeName = recipe['recipeName'];
        let productsList=recipe['productsList'];

        for(let i = 0; i<productsList.length;i++){
            if(!this.products.includes(productsList[i])){allPresent=false;break;}
        }

        if(!allPresent){throw new Error("We do not have this product");}
        this.dishes.push({recipeName,productsList});return `${recipeName} has been successfully cooked!`}

    inviteGuests(name, dish){
        let isPresent = false;
        this.dishes.forEach((obj) => {
            if (obj.recipeName === dish) {
                isPresent = true;
            }
        });
        if (!isPresent) {
            throw new Error('We do not have this dish');
        }
        if (name in this.guests) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance(){
        let output = '';
        Object.keys(this.guests).forEach(name => {
            let dish = this.guests[name];
            let products = [];
            this.dishes.forEach((curDish) => {
                if (curDish.recipeName === dish) {
                    products = curDish.productsList;
                }
            });
            output += `${name} will eat ${dish}, which consists of ${products.join(', ')}\n`;
        });
        return output.trim();
    }
}





let dinner = new ChristmasDinner(600);

console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.budget);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);
console.log(dinner.recipes({
     recipeName: 'Oshav',
     productsList: ['Fruits', 'Honey']
}));
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

console.log(dinner.inviteGuests('Ivan', 'Oshav'));

dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());