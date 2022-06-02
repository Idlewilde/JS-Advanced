const { expect } = require('chai')
const { testNumbers } = require('./testNumbers.js')

describe("test numbers", function () {

    describe("sumNumber", function () {
        it("returns undefined", function () {
            expect(testNumbers.sumNumbers({},5)).to.be.undefined;
            expect(testNumbers.sumNumbers(4,'z')).to.be.undefined;
            expect(testNumbers.sumNumbers([1],'a')).to.be.undefined;
        });
        it("returns sum", function () {
            expect(testNumbers.sumNumbers(1,5)).to.equal("6.00");
            expect(testNumbers.sumNumbers(4,1.52222)).to.equal("5.52");
            expect(testNumbers.sumNumbers(0,11.11)).to.equal("11.11");
        });
    });
    describe("numberChecker", function () {
        it("returns NaN", function () {
            expect(()=>testNumbers.numberChecker({})).to.throw(Error, 'The input is not a number!');
            expect(()=>testNumbers.numberChecker('z')).to.throw(Error, 'The input is not a number!');
            expect(()=>testNumbers.numberChecker([1,2])).to.throw(Error, 'The input is not a number!');
        });
        it("returns even", function () {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
        });
        it("returns odd", function () {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(1.1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('3')).to.equal('The number is odd!');
        });
    });

    describe("avg sum", function () {
        it("returns sum", function () {
            expect(testNumbers.averageSumArray([2,4,6])).to.equal(4);
            expect(testNumbers.averageSumArray([1,2,'z'])).to.be.NaN;
            expect(testNumbers.averageSumArray([2])).to.equal(2);
        });
    });
});