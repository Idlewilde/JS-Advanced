function generateReport() {

    const output = document.querySelector('#output');
    let checkboxes = Array.from(document.querySelectorAll('input'));
    let tableRows = Array.from(document.querySelectorAll('tbody tr'));
    let result = [];

    for (i = 0; i < tableRows.length; i++) {
        let columns = Array.from(tableRows[i].querySelectorAll('td'));
        let entry = {};
        for (j = 0; j < columns.length; j++) {
            if (checkboxes[j].checked) {
                entry[checkboxes[j].name] = columns[j].textContent;
                result.push(entry);
            }
        }
    }

    result = result.filter((item,
        index) => result.indexOf(item) === index);

    output.value = JSON.stringify(result);
}