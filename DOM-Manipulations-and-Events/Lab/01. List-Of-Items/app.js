function addItem() {
    const toAdd = document.getElementById('newItemText').value;
    const ul = document.getElementById('items');

    let newElement = document.createElement('li');
    newElement.textContent = toAdd;

    ul.appendChild(newElement);
}