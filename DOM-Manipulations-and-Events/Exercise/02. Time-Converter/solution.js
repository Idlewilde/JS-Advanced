function attachEventsListeners() {

    let input = document.getElementsByTagName('input');
    let buttons = [];
    let inputs = [];

    for (i = 0; i < input.length; i += 2) {
        inputs.push(input[i]);
        let button = input[i + 1];
        button.addEventListener('click', calculateTime);
        buttons.push(button);
    }

    function calculateTime(event) {

        for (i = 0; i < 4; i++) {
            let value = inputs[i].value;
            if (value != '' && i == 0) {
                inputs[1].value = Number(value) * 24;
                inputs[2].value = Number(value) * 24 * 60;
                inputs[3].value = Number(value) * 24 * 60 * 60;
            }
            else if (value != '' && i == 1) {
                inputs[0].value = Number(value) / 24;
                inputs[2].value = Number(value) * 60;
                inputs[3].value = Number(value) * 60 * 60;
            }
            else if (value != '' && i == 2) {
                inputs[0].value = Number(value) / 60 / 24;
                inputs[1].value = Number(value) / 60;
                inputs[3].value = Number(value) * 60;
            }
            else if (value != '' && i == 3) {
                inputs[0].value = Number(value) / 60 / 60 / 24;
                inputs[1].value = Number(value) / 60 / 60;
                inputs[2].value = Number(value) / 60;
            }
        }
    }
}