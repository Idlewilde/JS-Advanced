function solve(number, first, second, third, fourth, fifth) {
    let num = +number;

    for (i = 0; i < 5; i++) {
        let currOp;
        if (i === 0) { currOp = first; }
        else if (i == 1) { currOp = second; }
        else if (i == 2) { currOp = third; }
        else if (i == 3) { currOp = fourth; }
        else if (i == 4) { currOp = fifth; }
        switch (currOp) {
            case 'chop': num = num / 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num++; break;
            case 'bake': num = num * 3; break;
            case 'fillet': num = num * 0.8; break;
        }
        console.log(num)
    }


}