function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(value) {
            this.units = value;
        }

        convert(parameters) {
            const calculatedUnits = {
                m: (parameters) => parameters /= 10,
                cm: (parameters) => parameters,
                mm: (parameters) => parameters *= 10
            }
            return calculatedUnits[this.units](parameters);
        }
    }

    class Circle extends Figure {
        constructor(radius, units = 'cm') {
            super(units);
            this._radius = radius;
        }

        get radius() {
            return this.convert(this._radius);
        }

        get area() {
            return Math.PI * this.radius ** 2;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }

    }

    class Rectangle extends Figure {
        constructor(width, height, units = 'cm') {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this.convert(this._width);
        }

        get height() {
            return this.convert(this._height);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}