const { expect } = require('chai')
const { numberOperations } = require('./numberOperations.js')

describe("number operations", function () {

    describe("powNumber", function () {
        it("pows", function () {
            expect(numberOperations.powNumber(5)).to.equal(25);
        });
    });
    describe("number checker", function () {
        it("returns NaN str", function () {
            expect(() => numberOperations.numberChecker("entity")).to.throw(Error, 'The input is not a number!');
        });
        it("returns NaN arr", function () {
            expect(() => numberOperations.numberChecker([1,2,3])).to.throw(Error, 'The input is not a number!');
        });
        it("returns >100", function () {
            expect(numberOperations.numberChecker(105)).to.equal('The number is greater or equal to 100!');
        });
        it("returns = 100", function () {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });
        it("returns < 100", function () {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        });
        it("returns < 100 neg", function () {
            expect(numberOperations.numberChecker(-5)).to.equal('The number is lower than 100!');
        });
    });

    describe("arraySum", function () {
        it("sums equal arrays", function () {
            expect(numberOperations.sumArrays([1,2,3,4,5],[1,2,3,4,5])).to.deep.equal([2,4,6,8,10]);
        });
        it("sums equal arrays", function () {
            expect(numberOperations.sumArrays([0,0],[1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
        });
        it("sums equal arrays", function () {
            expect(numberOperations.sumArrays([1,2,3,4,5],[0,0])).to.deep.equal([1,2,3,4,5]);
        });
        it("sums equal arrays", function () {
            expect(numberOperations.sumArrays([-1,-2,-3,-4,-5],[1,2,3,4,5])).to.deep.equal([0,0,0,0,0]);
        });
        it("sums equal arrays", function () {
            expect(numberOperations.sumArrays([],[1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
        });
    });
});