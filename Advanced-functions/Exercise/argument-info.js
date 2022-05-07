function solve(...args) {
    let data = Array.from(args);
    let count = new Map();

    data.forEach(el => {
        let type = typeof el;
        console.log(`${type}: ${el}`);

        if (!count.has(type)) {
            count.set(type, 0);
        }
        count.set(type, count.get(type) + 1);
    });

    Array.from(count.entries()).filter(a=>a[1]>0).sort((a, b) => b[1] - a[1]).forEach(el => console.log(`${el[0]} = ${el[1]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob'}, 3.333, 9.999);