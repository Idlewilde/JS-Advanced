function solve() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let date = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let hireBTN = document.getElementById('add-worker');
    hireBTN.addEventListener('click', addWorker);
    let tbody = document.getElementById('tbody');
    let sum = document.getElementById('sum');

    function addWorker(event) {
        event.preventDefault(event);
        if (firstName.value.trim().length > 0 &&
            lastName.value.trim().length > 0 &&
            email.value.trim().length > 0 &&
            date.value.trim().length > 0 &&
            position.value.trim().length > 0 &&
            salary.value.trim().length > 0) {
            tbody.innerHTML += `<tr>
            <td>${firstName.value}</td>
            <td>${lastName.value}</td>
            <td>${email.value}</td>
            <td>${date.value}</td>
            <td>${position.value}</td>
            <td>${salary.value}</td>
            <td><button class='fired'>Fired</button>
            <button class="edit">Edit</button></td>
            </tr>`
            Array.from(document.getElementsByClassName('fired')).forEach(e => e.addEventListener('click', fire));
            Array.from(document.getElementsByClassName('edit')).forEach(e => e.addEventListener('click', edit));
            sum.textContent = (Number(sum.textContent) + Number(salary.value)).toFixed(2);
            firstName.value = ''; lastName.value = ''; email.value = ''; date.value = ''; position.value = ''; salary.value = '';
        }
        
        function fire(event) {
            event.preventDefault(event);
            let rowToEdit = event.target.parentNode.parentNode;
            sum.textContent = (Number(sum.textContent) - Number(rowToEdit.children[5].textContent)).toFixed(2);
            rowToEdit.remove();
        }

        function edit(event) {
            event.preventDefault(event);
            let rowToEdit = event.target.parentNode.parentNode;
            firstName.value = rowToEdit.children[0].textContent;
            lastName.value = rowToEdit.children[1].textContent;
            email.value = rowToEdit.children[2].textContent;
            date.value = rowToEdit.children[3].textContent;
            position.value = rowToEdit.children[4].textContent;
            salary.value = rowToEdit.children[5].textContent;
            rowToEdit.remove();
            sum.textContent = (Number(sum.textContent) - Number(salary.value)).toFixed(2);
        }

    }

}
solve()