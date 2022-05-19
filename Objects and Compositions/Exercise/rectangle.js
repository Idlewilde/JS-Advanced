function solve(width, height, color) {



    let rectangle = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1, color.length),
        calcArea() { return this.width * this.height }
    }

    return rectangle;
}

solve(3, 4, 'red')