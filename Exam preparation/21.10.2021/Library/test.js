const { expect } = require('chai')
const { library } = require('./library.js')

describe("library", function () {

    describe("calcPriceOfBook", function () {
        it("returns error", function () {
            expect(() => library.calcPriceOfBook(1, 1980)).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook("AAA", "AAA")).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook(1, "AAA")).to.throw(Error, "Invalid input");
        });
        it("returns price", function () {
            expect(library.calcPriceOfBook("The book", 1970)).to.equal('Price of The book is 10.00');
            expect(library.calcPriceOfBook("The book", 1980)).to.equal('Price of The book is 10.00');
            expect(library.calcPriceOfBook("On the road", 1999)).to.equal('Price of On the road is 20.00');
        });
    });

    describe("findBook", function () {
        it("returns error", function () {
            expect(() => library.findBook([], "AA")).to.throw(Error, "No books currently available");
        });
        it("returns the book", function () {
            expect(library.findBook(["The book", "AAA", "BBB"], "AAA")).to.equal("We found the book you want.");
            expect(library.findBook(["AAA"], "AAA")).to.equal("We found the book you want.");
        });
        it("doesn't find the book", function () {
            expect(library.findBook(["The book", "AAA", "BBB"], "ZZZ")).to.equal("The book you are looking for is not here!");
            expect(library.findBook(["AAA"], "ZZZ")).to.equal("The book you are looking for is not here!");
        });
    });

    describe("arrangeBooks", function () {
        it("returns error", function () {
            expect(() => library.arrangeTheBooks(1.2)).to.throw(Error, "Invalid input");
            expect(() => library.arrangeTheBooks(-1)).to.throw(Error, "Invalid input");
            expect(() => library.arrangeTheBooks("AAA")).to.throw(Error, "Invalid input");
        });
        it("arranges the books", function () {
            expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(15)).to.equal("Great job, the books are arranged.");
        });
        it("no space for the books", function () {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
            expect(library.arrangeTheBooks(80)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
    });

});