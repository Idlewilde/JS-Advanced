class List {
    constructor() {
        this.array = [];
        this.size = this.array.length;
    }

    add(number) {
        this.array.push(number);
        this.array = this.array.sort((a, b) => a - b);
        this.size = this.array.length;
    }

    remove(index) {
        if (index < 0 || index > this.array.size) { throw new Error('Invalid index') }
        else {
            this.array.splice(index, 1)
            this.array = this.array.sort((a, b) => a - b); this.size = this.array.length;
        }

    }

    get(index) {
        if (index < 0 || index > this.array.size) { throw new Error('Invalid index') }
        else {
            return this.array[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
list.add(1);
list.add(2);
list.add(10);
console.log(list.array)
console.log(list.size);

