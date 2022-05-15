class Hex {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }
    valueOf() {
        return this.value;
    }

    plus(number) {
        if (typeof (number) == 'number') { return new Hex(this.value + number); }
        else {
            return new Hex(this.value + number.valueOf()); }
    }
    minus(number) {
        if (typeof (number) == 'number') { return new Hex(this.value - number); }
        else {
            return new Hex(this.value - number.valueOf());}
    }
    parse(hex) {
        return parseInt(hex, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 == 256);
let a = new Hex(10);
let b = new Hex(5);
let c = a.plus(b);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
