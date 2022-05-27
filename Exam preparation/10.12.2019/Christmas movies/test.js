const { expect } = require('chai');
const  ChristmasMovies = require('./02. Christmas Movies_Resources');

describe('christmasMovies', () => {

    let christmas = new ChristmasMovies();

    beforeEach(() => { christmas = new ChristmasMovies(); });

    describe('initiation test', () => {
        it('has all properties', () => {
            expect(christmas).to.has.ownProperty('movieCollection');
            expect(christmas).to.has.ownProperty('watched');
            expect(christmas).to.has.ownProperty('actors');
            expect(christmas.actors).to.deep.equal([]);
            expect(christmas.movieCollection).to.deep.equal([]);
            expect(christmas.actors.length).to.deep.equal(0);
            expect(christmas.movieCollection.length).to.deep.equal(0);
            expect(christmas.watched).to.eql({});
        });
    });

    describe('buyMovie', () => {
        it('adds the movie', () => {
            expect(christmas.buyMovie('Hair', ['AAA', 'BBB'])).to.equal('You just got Hair to your collection in which AAA, BBB are taking part!');
        });
        it('throws error', () => {
            christmas.buyMovie('Hair', ['AAA', 'BBB']);
            expect(() => christmas.buyMovie('Hair', ['AAA', 'BBB'])).to.throw(Error, 'You already own Hair in your collection!');
        });
    });

    describe('discardMovie', () => {
        it('removes the movie', () => {
            christmas.buyMovie('CCC', ['DDD', 'EEE']);
            christmas.watchMovie('CCC');
            expect(christmas.discardMovie('CCC')).to.equal('You just threw away CCC!');
        });

        it('throws error not in collection', () => {
            expect(() => christmas.discardMovie('Hair')).to.throw(Error, 'Hair is not at your collection!');
        });

        it('throws error not watched', () => {
            christmas.buyMovie('Hair', ['AAA', 'BBB']);
            expect(() => christmas.discardMovie('Hair')).to.throw(Error, 'Hair is not watched!');
        });
    });

    describe('watchMovie', () => {
        it('watches the movie', () => {
            christmas.buyMovie('CCC', ['DDD', 'EEE']);
            christmas.watchMovie('CCC');
            expect(christmas.watched['CCC']).to.equal(1);
            christmas.watchMovie('CCC');
            expect(christmas.watched['CCC']).to.equal(2);
        });

        it('throws error not in collection', () => {
            expect(() => christmas.watchMovie('DDD')).to.throw(Error, 'No such movie in your collection!');
        });
    });

    describe('favouriteMovie', () => {
        it('returns the movie', () => {
            christmas.buyMovie('CCC', ['DDD', 'EEE']);
            christmas.buyMovie('AAA', ['BBB', 'FFF']);
            christmas.buyMovie('SSS', ['QQQ', 'TTT']);

            christmas.watchMovie('CCC'); christmas.watchMovie('CCC');
            christmas.watchMovie('CCC'); christmas.watchMovie('CCC');

            christmas.watchMovie('AAA'); christmas.watchMovie('AAA');

            christmas.watchMovie('SSS');

            expect(christmas.favouriteMovie()).to.equal('Your favourite movie is CCC and you have watched it 4 times!');
        });

        it('throws error not in collection', () => {
            christmas.buyMovie('CCC');
            christmas.buyMovie('DDD')
            expect(() => christmas.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
    });

    describe('mostStarredActor', () => {
        it('returns the actor', () => {
            christmas.buyMovie('CCC', ['DDD', 'BBB']);
            christmas.buyMovie('AAA', ['BBB', 'DDD']);
            christmas.buyMovie('SSS', ['QQQ', 'BBB']);

            expect(christmas.mostStarredActor()).to.equal('The most starred actor is BBB and starred in 3 movies!');
        });

        it('throws error not in collection', () => {

            expect(() => christmas.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
    });


});
