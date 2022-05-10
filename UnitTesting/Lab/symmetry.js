const {expect} = require('chai');
const isSymmetric = require('./symmetry');


describe('Demo test', () => {
    it('not array', () => {
        expect(isSymmetric(3, 5)).to.be.false;
    });
    
    it('symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
    });

    it('symmetric array 2', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });

    it('symmetric array 3', () => {
        expect(isSymmetric([1])).to.be.true;
    });

    it('symmetric array 4', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('not symmetric array', () => {
        expect(isSymmetric([1, 5, 3, 4, 2, 1])).to.be.false;
    });

    it('empty argument', () => {
        expect(isSymmetric()).to.be.false;
    });

    it('different types', () => {
        expect(isSymmetric([1,'1'])).to.be.false;
    });

    
});





