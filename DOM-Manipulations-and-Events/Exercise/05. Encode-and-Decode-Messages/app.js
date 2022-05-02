function encodeAndDecodeMessages() {
    let initial = document.querySelectorAll('textarea')[0];
    let encoded = document.querySelectorAll('textarea')[1];

    let encode = document.querySelectorAll('button')[0];
    let decode = document.querySelectorAll('button')[1];

    encode.addEventListener('click', encodeMessage);
    decode.addEventListener('click', decodeMessage);

    function encodeMessage(event) {
        let encodedMessage = '';
        let text = initial.value;

        for (i = 0; i < text.length; i++) {
            encodedMessage += String.fromCharCode(text.charCodeAt(i) + 1);
        }

        initial.value = '';
        encoded.value = encodedMessage;
    }

    function decodeMessage(event) {
        let text = encoded.value;
        let decodedMessage = '';

        for (i = 0; i < text.length; i++) {
            decodedMessage += String.fromCharCode(text.charCodeAt(i) - 1);
        }

        encoded.value = decodedMessage;
    }
}