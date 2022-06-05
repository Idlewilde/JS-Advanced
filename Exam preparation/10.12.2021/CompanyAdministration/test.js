const { expect } = require('chai')
const { companyAdministration } = require('./companyAdministration.js')

describe("companyAdministration", function () {

    describe("employee hiring", function () {
        it("not approved", function () {
            expect(companyAdministration.hiringEmployee('Tonya','Programmer',0)).to.equal(`Tonya is not approved for this position.`)
            expect(companyAdministration.hiringEmployee('Normal','Programmer',1)).to.equal(`Normal is not approved for this position.`)
        });
        it("returns hired employee", function () {
            expect(companyAdministration.hiringEmployee('Premiere', 'Programmer',7)).to.equal(`Premiere was successfully hired for the position Programmer.`)
            expect(companyAdministration.hiringEmployee('Normal','Programmer',3)).to.equal(`Normal was successfully hired for the position Programmer.`)
        });
        it("returns error", function () {
            expect(()=>companyAdministration.hiringEmployee('a','a',7)).to.throw(Error, `We are not looking for workers for this position.`);
        });
    });

    describe("calculateSalary", function () {
        it("returns regular hours", function () {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400)
            expect(companyAdministration.calculateSalary(0)).to.equal(0)
            expect(companyAdministration.calculateSalary(10)).to.equal(150)
        });
        it("returns overtime", function () {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415)
            expect(companyAdministration.calculateSalary(200)).to.equal(4000)
        });
        it("returns error for wrong input", function () {
            expect(()=>companyAdministration.calculateSalary('a')).to.throw(Error, "Invalid hours");
            expect(()=>companyAdministration.calculateSalary(-5)).to.throw(Error, "Invalid hours");
        });
    });

    describe("firedEmployee", function () {
        it("returns updated array", function () {
            expect(companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],1)).to.equal('Pesho, Sasho')
            expect(companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],0)).to.equal('Gosho, Sasho')
            expect(companyAdministration.firedEmployee(['Pesho'],0)).to.equal('');
        });
        it("returns error for wrong input", function () {
            expect(()=>companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],"1")).to.throw(Error, "Invalid input");
            expect(()=>companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],1.5)).to.throw(Error, "Invalid input");
            expect(()=>companyAdministration.firedEmployee('1',"1")).to.throw(Error, "Invalid input");
            expect(()=>companyAdministration.firedEmployee(5,1)).to.throw(Error, "Invalid input");
            expect(()=>companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],3)).to.throw(Error, "Invalid input");
            expect(()=>companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],-1)).to.throw(Error, "Invalid input");
            expect(()=>companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Sasho'],7)).to.throw(Error, "Invalid input");
        });
    });
});
