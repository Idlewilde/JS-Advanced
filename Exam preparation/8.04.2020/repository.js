describe("repository", function () {

    let repository = {};
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"};
    
    beforeEach(()=>{repository=new Repository(properties);});

    describe("instantiation and props", function () {
        it("has all props", function () {
        expect(repository).to.has.ownProperty('props');
        expect(repository).to.has.ownProperty('data');
        expect(repository).to.has.ownProperty('nextId');
        expect(repository.props).to.deep.equal(properties);
        expect(repository.data).to.deep.equal(new Map());
        expect(repository.nextId()).to.deep.equal(0);
        expect(repository.nextId()).to.deep.equal(1);
    
        });
    });

    describe("add and validate entity", function () {
        it("returns error when no propName", function () {
            let entity = { };
            expect(() => repository.add(entity)).to.throw(Error, "Property name is missing from the entity!");
        });
        it("returns error when prop type is incorrect", function () {
            let entity = {
                name: 7,
                age: 22,
                birthday: new Date(1998, 0, 7) };
            expect(() => repository.add(entity)).to.throw(Error, "Property name is not of correct type!");
        });
        it("adds entity correctly", function () {
            let entity = {
                name: 'Petar',
                age: 22,
                birthday: new Date(1998, 0, 7) };
                expect(repository.add(entity)).to.deep.equal(0);
                expect(repository.data.get(0)).to.deep.equal(entity);
                expect(repository.nextId()).to.deep.equal(1);
    });
});

describe("test count getter", function () {
    it("returns correct count", function () {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)};
        repository.add(entity);repository.add(entity);
        expect(repository.count).to.deep.equal(2);
        repository.add(entity);
        expect(repository.count).to.deep.equal(3);
    }); 
});

describe("test get ID", function () {
    it("returns correct entity", function () {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)};
        repository.add(entity);
        expect(repository.getId(0)).to.deep.equal(entity);
    }); 
    it("throws error when ID is wrong", function () {
        expect(() => repository.getId(5)).to.throw(Error, `Entity with id: 5 does not exist!`);
    });
});

describe("update and validate entity", function () {
    it("returns error when no propName", function () {
        let entity = {
            name: 'Petar',
            age: 22,
            birthday: new Date(1998, 0, 7) };
            repository.add(entity);

            let updated={
                name: 'Pesho',
                birthday: new Date(1998, 0, 7) };    
        expect(() => repository.update(0, updated)).to.throw(Error, "Property age is missing from the entity!");
    });
    it("returns error when prop type is incorrect", function () {
        let entity = {
            name: 'Petar',
            age: 22,
            birthday: new Date(1998, 0, 7) };
            repository.add(entity);

        let updated = {
            name: 7,
            age: 22,
            birthday: new Date(1998, 0, 7) };
        expect(() => repository.update(0,updated)).to.throw(Error, "Property name is not of correct type!");
    });

    it("updates entity correctly", function () {
        let entity = {
            name: 'Petar',
            age: 22,
            birthday: new Date(1998, 0, 7) };
            repository.add(entity);

        let updated = {
            name: 'Petar',
            age: 32,
            birthday: new Date(1998, 0, 7) };
            repository.update(0,updated);
            expect(repository.data.get(0)).to.deep.equal(updated);
});
    it("throws error when ID is wrong", function () {
        let updated = {
            name: 'Petar',
            age: 32,
            birthday: new Date(1998, 0, 7) };
    expect(() => repository.update(5,updated)).to.throw(Error, `Entity with id: 5 does not exist!`);
});
});

describe("delete ID", function () {
    it("deletes succesfully", function () {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)};
        repository.add(entity);
        repository.del(0);
        expect(repository.data.get(0)).to.be.undefined;
        expect(repository.data.size).to.deep.equal(0);
    }); 
    it("deletes succesfully", function () {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)};
            let entity1 = {
                name: "Peshoz",
                age: 22,
                birthday: new Date(1998, 0, 7)};
                let entity2 = {
                    name: "Peshoa",
                    age: 22,
                    birthday: new Date(1998, 0, 7)};
        repository.add(entity);repository.add(entity1);repository.add(entity2);
        repository.del(1);
        expect(repository.data.get(1)).to.be.undefined;
        expect(repository.data.size).to.deep.equal(2);
    }); 
    it("throws error when ID is wrong", function () {
        expect(() => repository.del(5)).to.throw(Error, `Entity with id: 5 does not exist!`);
    });
});

});