function solution() {
    let button = document.querySelector('button');
    let giftInput = document.querySelector('input');
    let giftsArray = [];
    let giftsList = document.querySelectorAll('ul')[0];
    let sentGifts = document.querySelectorAll('ul')[1];
    let discartedGifts = document.querySelectorAll('ul')[2];

    button.addEventListener('click', addGift);

    function addGift(event) {
        let giftName = giftInput.value;
        giftsArray.push(giftName);
        giftsArray.sort((a, b) => a.localeCompare(b));
        giftInput.value = '';
        giftsList.innerHTML = '';

        for (let i = 0; i < giftsArray.length; i++) {

            let currentChild = document.createElement('li');
            currentChild.textContent = giftsArray[i];
            currentChild.classList.add("gift");

            let sendButton = document.createElement('button');
            sendButton.setAttribute('id', 'sendButton');
            sendButton.textContent = 'Send';
            sendButton.addEventListener('click', sendGift);
            let discardButton = document.createElement('button');
            discardButton.setAttribute('id', 'discardButton');
            discardButton.textContent = 'Discard';
            discardButton.addEventListener('click', discardGift);

            currentChild.appendChild(sendButton);
            currentChild.appendChild(discardButton);
            giftsList.appendChild(currentChild);
        }

    }

    function sendGift(event) {
        let listItem = event.target.parentNode;
        giftsList.removeChild(listItem);

        let currentButtons = listItem.querySelectorAll('button');
        listItem.removeChild(currentButtons[0]);
        listItem.removeChild(currentButtons[1]);

        let listedGiftName = listItem.textContent;

        let index = giftsArray.indexOf(listedGiftName);
        giftsArray.splice(index, 1);

        let currentChild = document.createElement('li');
        currentChild.textContent = listedGiftName;
        sentGifts.appendChild(currentChild);

    }

    function discardGift(event) {
        let listItem = event.target.parentNode;
        giftsList.removeChild(listItem);

        let currentButtons = listItem.querySelectorAll('button');
        listItem.removeChild(currentButtons[0]);
        listItem.removeChild(currentButtons[1]);

        let listedGiftName = listItem.textContent;

        let index = giftsArray.indexOf(listedGiftName);
        giftsArray.splice(index, 1);

        let currentChild = document.createElement('li');
        currentChild.textContent = listedGiftName;
        discartedGifts.appendChild(currentChild);
    }

}