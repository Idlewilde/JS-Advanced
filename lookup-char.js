const { expect } = require('chai');
const lookupChar = require('./lookupChar');


describe('lookupChar', () => {

    it('has wrong params', () => {
        expect(lookupChar(4)).to.equal(undefined);
        expect(lookupChar('lalala')).to.equal(undefined);
        expect(lookupChar({ 'no': 'yes' })).to.equal(undefined);
        expect(lookupChar(4, 4)).to.equal(undefined);
        expect(lookupChar()).to.equal(undefined);
        expect(lookupChar('lala', 1.2)).to.equal(undefined);
    });

    it('has wrong index', () => {
        expect(lookupChar('la', 4)).to.equal("Incorrect index");
        expect(lookupChar('lalala', -1)).to.equal("Incorrect index");
        expect(lookupChar('no', 3)).to.equal("Incorrect index");
    });

    it('correct index', () => {
        expect(lookupChar('la', 1)).to.equal("a");
        expect(lookupChar('lalala', 2)).to.equal("l");
        expect(lookupChar('no', 0)).to.equal("n");
    });



});





