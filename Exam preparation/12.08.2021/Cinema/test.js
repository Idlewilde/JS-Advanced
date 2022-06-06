const { expect } = require('chai')
const { cinema } = require('./cinema.js')

describe("cinema", function () {

    describe("showMovies", function () {
        it("returns no movies", function () {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.")
        });
        it("returns string", function () {
            expect(cinema.showMovies(['a','b','c'])).to.equal("a, b, c")
        });
    });
    describe("ticketPrice", function () {
        it("returns price", function () {
            expect(cinema.ticketPrice('Premiere')).to.deep.equal(12.00)
            expect(cinema.ticketPrice('Normal')).to.deep.equal(7.50)
            expect(cinema.ticketPrice('Discount')).to.deep.equal(5.50)
        });
        it("returns error", function () {
            expect(()=>cinema.ticketPrice('a')).to.throw(Error, 'Invalid projection type.');
        });
    });

    describe("swapseats", function () {
        it("swaps", function () {
            expect(cinema.swapSeatsInHall(1,2)).to.equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(11,20)).to.equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(11,15)).to.equal("Successful change of seats in the hall.")
        });
        it("returns error", function () {
            expect(cinema.swapSeatsInHall(-1,1)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(-1,-1)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(21,21)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1,-1)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(21,1)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1,21)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1,1)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1,0)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0,1)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall('s',1)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1,'s')).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall('s','a')).to.equal("Unsuccessful change of seats in the hall.")
        });
    });
});