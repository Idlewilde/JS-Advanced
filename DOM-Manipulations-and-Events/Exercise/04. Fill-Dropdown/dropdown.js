function addItem() {
    let newText = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');
    let option = document.createElement('option');
    option.textContent = newText.value;
    option.value = newValue.value;

    let selection = document.querySelector('select');
    selection.appendChild(option);

    newText.value = '';
    newValue.value = '';

}
