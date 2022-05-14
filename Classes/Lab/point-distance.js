class Point {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(p1, p2){
        let x1=p1.x;
        let x2=p2.x;
        let y1=p1.y;
        let y2=p2.y;

        let distance = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        return distance;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
