const { expect } = require('chai')
const { rentCar } = require('./rentCar.js')


describe("rentCar", function () {

    describe("searchCar", function () {
     
        it("returns success", function () {
            expect(rentCar.searchCar(['kon','magare','bql kon','kobila','krava','magare','magare'],'magare')).to.equal(`There is 3 car of model magare in the catalog!`);
            expect(rentCar.searchCar(['kon','magare','kon','kobila'],'kon')).to.equal(`There is 2 car of model kon in the catalog!`);
        });
        it("returns error", function () {
            expect(()=>rentCar.searchCar('kon','kon')).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.searchCar(['kon','magare'],5)).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.searchCar(3,3)).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.searchCar(['kon','magare'],'kamila')).to.throw(Error, 'There are no such models in the catalog!');
        });
    });

        describe("calculatePriceOfCar", function () {
     
            it("returns success", function () {
                expect(rentCar.calculatePriceOfCar('Volkswagen',3)).to.equal(`You choose Volkswagen and it will cost $60!`);
                expect(rentCar.calculatePriceOfCar('Audi',5)).to.equal(`You choose Audi and it will cost $180!`);
                expect(rentCar.calculatePriceOfCar('Toyota',0)).to.equal(`You choose Toyota and it will cost $0!`);
                expect(rentCar.calculatePriceOfCar('BMW',4)).to.equal(`You choose BMW and it will cost $180!`);
                expect(rentCar.calculatePriceOfCar('Mercedes',1)).to.equal(`You choose Mercedes and it will cost $50!`);
            });
                
            it("returns error", function () {
                expect(()=>rentCar.calculatePriceOfCar('kon','kon')).to.throw(Error, 'Invalid input!');
                expect(()=>rentCar.calculatePriceOfCar(1,5)).to.throw(Error, 'Invalid input!');
                expect(()=>rentCar.calculatePriceOfCar(3,3.5)).to.throw(Error, 'Invalid input!');
                expect(()=>rentCar.calculatePriceOfCar('kamila',5)).to.throw(Error, 'No such model in the catalog!');
            });

        });

        describe("checkBudget", function () {
     
            it("returns error", function () {
                expect(()=>rentCar.checkBudget('Volkswagen',1,1)).to.throw(Error, 'Invalid input!');
                expect(()=>rentCar.checkBudget(1,'a',3)).to.throw(Error, 'Invalid input!');
                expect(()=>rentCar.checkBudget(1,1,'a')).to.throw(Error, 'Invalid input!');
                expect(()=>rentCar.checkBudget('a','a',1)).to.throw(Error, 'Invalid input!');
                expect(()=>rentCar.checkBudget('Mercedes','a','a')).to.throw(Error, 'Invalid input!');
            });

            it("no success", function () {
                expect(rentCar.checkBudget(5,5,25)).to.equal(`You rent a car!`);
                expect(rentCar.checkBudget(2,3,20)).to.equal(`You rent a car!`);
            });
                
            it("returns success", function () {
                expect(rentCar.checkBudget(5,15,25)).to.equal('You need a bigger budget!');
            });

        });
    });
    


