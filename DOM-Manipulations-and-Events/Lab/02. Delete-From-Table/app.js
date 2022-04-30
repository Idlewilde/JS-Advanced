function deleteByEmail() {
    const toDelete = document.querySelector('input').value;
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    let isFound = false;

    for (let row of rows) {
        let cells = Array.from(row.children);
        for (let cell of cells) {
            if (cell.textContent == toDelete) {
                row.parentNode.removeChild(row);
                document.getElementById('result').textContent = 'Deleted';
                isFound = true;
            }
        }
    }

    if (!isFound) { document.getElementById('result').textContent = 'Not found.'; }
}