const { expect } = require('chai')
const { bookSelection } = require('./bookSelection.js')


describe("bookSelection", function () {

    describe("isGenreSuitable", function () {
     
        it("returns suitable", function () {
            expect(bookSelection.isGenreSuitable('Fantasy',50)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Horror',13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Thriller',15)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Fairytales',11)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Romance',12)).to.equal(`Those books are suitable`);

        });
        it("returns not suitable", function () {
            expect(bookSelection.isGenreSuitable('Horror',12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Thriller',12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Thriller',10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable('Horror',8)).to.equal(`Books with Horror genre are not suitable for kids at 8 age`);
        });
    });

    describe("isItAffordable", function () {
     
        it("returns error", function () {
            expect(()=>bookSelection.isItAffordable('Fantasy','50')).to.throw(Error,`Invalid input`);
            expect(()=>bookSelection.isItAffordable('Horror',13)).to.throw(Error,`Invalid input`);
            expect(()=>bookSelection.isItAffordable(10,'15')).to.throw(Error,`Invalid input`);


        });
        it("returns affordable", function () {
            expect(bookSelection.isItAffordable(12,12)).to.equal(`Book bought. You have 0$ left`);
            expect(bookSelection.isItAffordable(10,12)).to.equal(`Book bought. You have 2$ left`);
            expect(bookSelection.isItAffordable(0,0)).to.equal(`Book bought. You have 0$ left`);
            expect(bookSelection.isItAffordable(0,8)).to.equal(`Book bought. You have 8$ left`);
        });

        it("returns not affordable", function () {
            expect(bookSelection.isItAffordable(13,12)).to.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(20,0)).to.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(6,5)).to.equal("You don't have enough money");
        });
    });

    describe("suitableTitles", function () {
     
        it("returns error", function () {
            expect(()=>bookSelection.suitableTitles('Fantasy','50')).to.throw(Error,`Invalid input`);
            expect(()=>bookSelection.suitableTitles(['a','b'],13)).to.throw(Error,`Invalid input`);
            expect(()=>bookSelection.suitableTitles(10,15)).to.throw(Error,`Invalid input`);


        });
        it("returns array", function () {
            expect(bookSelection.suitableTitles([
                {title:'Lord of the rings',genre:'fantasy'},
                {title:'It',genre:'horror'},
                {title:'Lord of the flies',genre:'classics'},
                {title:'Song of ice and fire',genre:'fantasy'},
                {title:'Lolita',genre:'classics'},
            ],"fantasy")).to.deep.equal(['Lord of the rings','Song of ice and fire']);
            expect(bookSelection.suitableTitles([{title:'Lord of the flies',genre:'classics'},
            {title:'Song of ice and fire',genre:'fantasy'}],"horror")).to.deep.equal([]);
            expect(bookSelection.suitableTitles([ {title:'It',genre:'romance'}],"romance")).to.deep.equal(['It']);
        });
    });

});
