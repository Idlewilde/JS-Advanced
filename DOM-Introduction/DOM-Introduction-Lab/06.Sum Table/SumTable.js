function sumTable() {
    let rows = Array.from(document.querySelectorAll('td'));
    let sumText = document.getElementById('sum');

    let sum = 0;

    for (let i = 1; i < rows.length; i += 2) {
        sum += Number(rows[i].textContent);
    }
    
    sumText.textContent = sum;
}