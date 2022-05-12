const {expect} = require('chai');
const isOddOrEven = require('./isOddOrEven');


describe('isOddOrEven', () => {

    it('has wrong params', () => {
        expect(isOddOrEven(4)).to.equal(undefined);
        expect(isOddOrEven({'no':'yes'})).to.equal(undefined);
        expect(isOddOrEven(['a'])).to.equal(undefined);
        expect(isOddOrEven()).to.equal(undefined);
    });

    it('even length', () => {
        expect(isOddOrEven('lala')).to.equal('even');
        expect(isOddOrEven('lalala')).to.equal('even');
    });

    it('odd length', () => {
        expect(isOddOrEven('lalal')).to.equal('odd');
        expect(isOddOrEven('l')).to.equal('odd');
    });

    it('multiple', () => {
        expect(isOddOrEven('lalal')).to.equal('odd');
        expect(isOddOrEven('la')).to.equal('even');
        expect(isOddOrEven('l')).to.equal('odd');
    });


});





