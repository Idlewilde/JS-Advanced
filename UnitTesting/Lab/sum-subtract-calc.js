const {expect} = require('chai');
const {createCalculator} = require('./add-subtract');


describe('createCalculator', () => {

    let instance = null;

    beforeEach(()=>{instance=createCalculator()});

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('add single num', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it('add multiple num', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });

    it('subtract single num', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    });

    it('add multiple num', () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    });

    it('subtract string single num', () => {
        instance.subtract("1");
        expect(instance.get()).to.equal(-1);
    });

    it('add string single num', () => {
        instance.add("1");
        expect(instance.get()).to.equal(1);
    });

    it('add and subtract strings', () => {
        instance.add("1");
        instance.subtract("1");
        expect(instance.get()).to.equal(0);
    })

    it('no params', () => {
        instance.add();
        instance.subtract();
        expect(instance.get()).to.be.NaN;
    })

    it('wrong params', () => {
        instance.add('hi');
        expect(instance.get()).to.be.NaN;
    })


    it('add subtract num', () => {
        instance.subtract(1);
        instance.add(2);
        expect(instance.get()).to.equal(1);
    });


});





