class Restaurant {

    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let output = '';
        for (let i = 0; i < products.length; i++) {
            let product = products[i].split(' ')[0];
            let qty = Number(products[i].split(' ')[1]);
            let totalPrice = Number(products[i].split(' ')[2]);

            if (totalPrice <= this.budgetMoney) {
                this.budgetMoney -= totalPrice;
                if (Object.keys(this.stockProducts).includes(product)) {
                    let totalQty = qty + this.stockProducts[product];
                    this.stockProducts[product] = totalQty;
                }
                else { this.stockProducts[product] = qty; }
                this.history.push(`Successfully loaded ${qty} ${product}`);
                output += `Successfully loaded ${qty} ${product}\n`
            }
            else {
                this.history.push(`There was not enough money to load ${qty} ${product}`);
                output += `There was not enough money to load ${qty} ${product}\n`
            }
        }
        return output.trim();
    }

    addToMenu(meal, neededProducts, price) {
        let productList = [];
        for (let i = 0; i < neededProducts.length; i++) {
            let product = neededProducts[i].split(' ')[0];
            let qty = Number(neededProducts[i].split(' ')[1]);
            let obj = {};
            obj[product] = qty;
            productList.push(obj);
        }
        if (Object.keys(this.menu).includes(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        }
        else {
            this.menu[meal] = { 'products': productList, 'price': price };
            if (Object.keys(this.menu).length == 1) { return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?` }
            else { return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?` }
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) { return "Our menu is not ready yet, please come later..." }
        else {
            let output = '';
            let mealsKeys = Object.keys(this.menu);

            for (let i = 0; i < mealsKeys.length; i++) {
                let meal = mealsKeys[i];
                let info = this.menu[meal];
                let price = info['price'];
                output += `${meal} - $ ${price}\n`
            }
            return output.trim();
        }
    }

    makeTheOrder(meal){
        if(!Object.keys(this.menu).includes(meal)){return `There is not ${meal} yet in our menu, do you want to order something else?`}
        let info=this.menu[meal];
        let products = info.products;
        let haveAllProducts=true;
        for(let i =0; i<products.length; i++){
            let productName=Object.keys(products[i])[0];
            let productQty=products[i][productName];
            if(!Object.keys(this.stockProducts).includes(productName)||this.stockProducts[productName]<productQty){
                haveAllProducts=false;
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }}
           if(haveAllProducts){
            for(let i =0; i<products.length; i++){
            let productName=Object.keys(products[i])[0];
            let productQty=products[i][productName];
            this.stockProducts.productName-=productQty;
           }
           let currentMeal = this.menu[meal];
           let price=currentMeal.price;
           this.budgetMoney+=price;
           return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
        }
    }
    
}

let test = new Restaurant(1000);
console.log(test.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(test.stockProducts);
console.log(test.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(test.stockProducts);
console.log(test.history);
console.log(test.addToMenu('fruit salad',['Banana 5','Strawberries 6'],50))
console.log(test.showTheMenu());
console.log(test.makeTheOrder('fruit salad'))