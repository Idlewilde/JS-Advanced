const { expect } = require('chai')
const { dealership } = require('./dealership.js')

describe("dealership", function () {

    describe("has all props", function () {
        it("has all functions", function () {
            expect(dealership).to.has.ownProperty('newCarCost');
            expect(dealership).to.has.ownProperty('carEquipment');
            expect(dealership).to.has.ownProperty('euroCategory');
        });
    });

    describe("newCarCost test", function () {
        it("newCarCost decreases price when old model is returned", function () {
            expect(dealership.newCarCost('Audi A4 B8', 50000)).to.deep.equal(35000);
        });
        it("newCarCost keeps price when no old model is returned", function () {
            expect(dealership.newCarCost('No such model', 50000)).to.deep.equal(50000);
        });
    });

    describe("carEquipment test", function () {
        it("returns filtered array", function () {
            expect(dealership.carEquipment(
                ['warmer','radio','seat','cup','coffee','tea','pizza'],
                [1,3,4,6])).to.deep.equal(['radio','cup','coffee','pizza']);
        });
    });
    describe("euro test", function () {
  
        it("decreases price and returns correct value returned", function () {
            dealership.newCarCost('Audi A4 B8', 30000);
            expect(dealership.euroCategory(5)).to.eql(`We have added 5% discount to the final price: ${15000*0.95}.`);
        });
        it("decreases price and returns correct value four returned", function () {
            dealership.newCarCost('Audi A4 B8', 30000);
            expect(dealership.euroCategory(4)).to.eql(`We have added 5% discount to the final price: ${15000*0.95}.`);
        });
        it("no discount", function () {
            dealership.newCarCost('Audi A4 B8', 30000);
            expect(dealership.euroCategory(2)).to.eql('Your euro category is low, so there is no discount from the final price!');
        });
    });

});