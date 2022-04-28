function toggle() {

    const button = document.getElementsByClassName('button')[0].textContent;
    const text = document.getElementById("extra");

    if (button === 'Less') {
        text.style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    }

    else if (button === 'More') {
        text.style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less';
    }

}