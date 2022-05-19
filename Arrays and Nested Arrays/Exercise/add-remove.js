function solve(input) {
    result = [];
    let index = 0;
    for (i = 1; i <= input.length; i++) {
        if (input[index] === 'add') { result.push(i); }
        else { result.pop(); }
        index++;
    }

    if (result.length === 0) { console.log('Empty'); }
    else { console.log(result.join('\n')); }
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']
)