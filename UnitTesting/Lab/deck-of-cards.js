function createDeck(cardArray) {
    try {
        console.log(cardArray.map(card => {
            face = card.slice(0, -1);
            suit = card.slice(-1);
            try {
                return createCard(face, suit);
            }
            catch (err) {
                throw new Error("Invalid card: " + card);
            }
        }).join(" "));
    }
    catch (err) { console.log(err.message); }

    function createCard(face, suit) {

        let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let validSuits = ["S", "H", "D", "C"];
        let utfSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        if (!validFaces.includes(face) || !validSuits.includes(suit)) { throw new Error(`Invalid card: ${face + suit}`) };

        let card = {
            face,
            suit: utfSuits[suit],
            toString() { return this.face + this.suit }
        }

        return card;

    }

}

createDeck(['AS', '10D', 'KH', '2C']);
createDeck(['5S', '3D', 'QD', '1C']);