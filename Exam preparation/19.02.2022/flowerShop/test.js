const { expect } = require('chai')
const { flowerShop } = require('./flowerShop.js')

describe("flowerShop", function () {

    describe("calcPriceOfFlowers", function () {
     
        it("returns success", function () {
            expect(flowerShop.calcPriceOfFlowers('Rose', 7,7)).to.equal(`You need $49.00 to buy Rose!`) });
        it("returns error", function () {
            expect(()=>flowerShop.calcPriceOfFlowers(5,7,7)).to.throw(Error, 'Invalid input!');
            expect(()=>flowerShop.calcPriceOfFlowers('a','a',7)).to.throw(Error, 'Invalid input!');
            expect(()=>flowerShop.calcPriceOfFlowers('a',7,'a')).to.throw(Error, 'Invalid input!');
            expect(()=>flowerShop.calcPriceOfFlowers('a','a','b')).to.throw(Error, 'Invalid input!');
            expect(()=>flowerShop.calcPriceOfFlowers('a',1.5,1)).to.throw(Error, 'Invalid input!');
            expect(()=>flowerShop.calcPriceOfFlowers('a',1,1.5)).to.throw(Error, 'Invalid input!');
            expect(()=>flowerShop.calcPriceOfFlowers(7,'a','b')).to.throw(Error, 'Invalid input!');
        });
    });

    describe("checkFlowersAvailable", function () {
     
        it("available", function () {
            expect(flowerShop.checkFlowersAvailable('Rose',['Rose','Lilac','Tulip'])).to.equal(`The Rose are available!`);
            expect(flowerShop.checkFlowersAvailable('Lilac',['Rose','Lilac','Tulip'])).to.equal(`The Lilac are available!`) });
        it("sold", function () {
            expect(flowerShop.checkFlowersAvailable('Lily',['Rose','Lilac','Tulip'])).to.equal(`The Lily are sold! You need to purchase more!`);
            expect(flowerShop.checkFlowersAvailable('Daffodil',['Rose','Lilac','Tulip'])).to.equal(`The Daffodil are sold! You need to purchase more!`) }); 
        });

        describe("sellFlowers", function () {
     
            it("sells", function () {
                expect(flowerShop.sellFlowers(['Rose','Lilac','Tulip'],0)).to.equal('Lilac / Tulip') 
                expect(flowerShop.sellFlowers(['Rose','Lilac','Tulip'],2)).to.equal('Rose / Lilac') });
           
                it("returns error", function () {
                    expect(()=>flowerShop.sellFlowers(['Rose','Lilac','Tulip'],3)).to.throw(Error, 'Invalid input!');
                    expect(()=>flowerShop.sellFlowers(['Rose','Lilac','Tulip'],-1)).to.throw(Error, 'Invalid input!');
                    expect(()=>flowerShop.sellFlowers(5,5)).to.throw(Error, 'Invalid input!');
                    expect(()=>flowerShop.sellFlowers(['Rose','Lilac','Tulip'],"0")).to.throw(Error, 'Invalid input!');
                }); 
            });
        });