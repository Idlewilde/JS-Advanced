const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');


describe('mathEnforcer', () => {

    it('has all methods', () => {
        expect(mathEnforcer).to.has.ownProperty('addFive');
        expect(mathEnforcer).to.has.ownProperty('subtractTen');
        expect(mathEnforcer).to.has.ownProperty('sum');
    });

    it('has wrong params', () => {
        expect(mathEnforcer.addFive('no')).to.be.undefined;
        expect(mathEnforcer.addFive()).to.be.undefined;
        expect(mathEnforcer.subtractTen('no')).to.be.undefined;
        expect(mathEnforcer.subtractTen()).to.be.undefined;
        expect(mathEnforcer.sum()).to.be.undefined;
        expect(mathEnforcer.sum(2)).to.be.undefined;
        expect(mathEnforcer.sum(2, 'no')).to.be.undefined;
        expect(mathEnforcer.sum('2', 2)).to.be.undefined;
    });

    it('add five', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
        expect(mathEnforcer.addFive(-5)).to.equal(0);
        expect(mathEnforcer.addFive(1.2)).to.be.closeTo(6.2, 0.01);
        expect(mathEnforcer.addFive(-5.2)).to.be.closeTo(-0.2, 0.01);
    });

    it('subtract ten', () => {
        expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        expect(mathEnforcer.subtractTen(20)).to.equal(10);
        expect(mathEnforcer.subtractTen(20.5)).to.be.closeTo(10.5, 0.01);
        expect(mathEnforcer.subtractTen(-5.5)).to.be.closeTo(-15.5, 0.01);
    });

    it('sum', () => {
        expect(mathEnforcer.sum(5, -5)).to.equal(0);
        expect(mathEnforcer.sum(5, 5)).to.equal(10);
        expect(mathEnforcer.sum(1.2, 1.3)).to.be.closeTo(2.5, 0.01);
        expect(mathEnforcer.sum(-1.2, 1.3)).to.be.closeTo(0.1, 0.01);
    });



});





