function createCard(face,suit){
   
    let validFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    let validSuits = ["S","H","D","C"];
    let utfSuits={
        'S':'\u2660',
        'H':'\u2665',
        'D':'\u2666',
        'C':'\u2663'
    }

    if(!validFaces.includes(face)){throw new Error('Error')};
    if(!validSuits.includes(suit)){throw new Error('Error')};

    let card = {
        face,
        suit:utfSuits[suit],
        toString(){return this.face+this.suit}
    }

    return card;

}

let card1 = createCard('K', 'H');
console.log(card1.toString());