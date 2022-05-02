function lockedProfile() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) { button.addEventListener('click', showMore); }

    function showMore(event) {
        let div = event.target.parentElement;
        let isActive = div.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            let hiddenInfo = div.querySelector('div');

            if (event.target.textContent == 'Show more') {
                hiddenInfo.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                hiddenInfo.style.display = '';
                event.target.textContent = 'Show more';
            }
        }

    }
}
