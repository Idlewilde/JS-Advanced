function attachEventsListeners() {
    let valueInput = document.getElementById('inputDistance');
    let dropdownInput = document.getElementById('inputUnits');
    let valueOutput = document.getElementById('outputDistance');
    let valueSelector = document.getElementById('outputUnits');
    let button = document.getElementById('convert');

    button.addEventListener('click', convertDistance);

    function convertDistance(event) {
        let input = Number(valueInput.value);
        let dropdownUnitsInput = dropdownInput.value;
        let inMeters = 0;

        if (dropdownUnitsInput == 'km') { inMeters = input * 1000; }
        else if (dropdownUnitsInput == 'cm') { inMeters = input * 0.01; }
        else if (dropdownUnitsInput == 'mm') { inMeters = input * 0.001; }
        else if (dropdownUnitsInput == 'mi') { inMeters = input * 1609.34; }
        else if (dropdownUnitsInput == 'yrd') { inMeters = input * 0.9144; }
        else if (dropdownUnitsInput == 'ft') { inMeters = input * 0.3048; }
        else if (dropdownUnitsInput == 'in') { inMeters = input * 0.0254; }

        let dropdownUnitsOutput = valueSelector.value;

        if (dropdownUnitsOutput == 'km') { valueOutput.value = inMeters / 1000; }
        else if (dropdownUnitsOutput == 'm') { valueOutput.value = inMeters; }
        else if (dropdownUnitsOutput == 'cm') { valueOutput.value = inMeters / 0.01; }
        else if (dropdownUnitsOutput == 'mm') { valueOutput.value = inMeters / 0.001; }
        else if (dropdownUnitsOutput == 'mi') { valueOutput.value = inMeters / 1609.34; }
        else if (dropdownUnitsOutput == 'yrd') { valueOutput.value = inMeters / 0.9144; }
        else if (dropdownUnitsOutput == 'ft') { valueOutput.value = inMeters / 0.3048; }
        else if (dropdownUnitsOutput == 'in') { valueOutput.value = inMeters / 0.0254; }

    }
}