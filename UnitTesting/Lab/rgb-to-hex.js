const {expect} = require('chai');
const rgbToHexColor = require('./rgb-to-hex');


describe('Demo test', () => {
    it('blue undefined top', () => {
        expect(rgbToHexColor(3, 5,-1)).to.be.undefined;
    });

    it('blue undefined wrong', () => {
        expect(rgbToHexColor(3, '5',-1)).to.be.undefined;
    });
    it('blue undefined decimal', () => {
        expect(rgbToHexColor(3, 5.5,-1)).to.be.undefined;
    });
    it('blue undefined bottom', () => {
        expect(rgbToHexColor(3,5,270)).to.be.undefined;
    });

    it('red undefined top', () => {
        expect(rgbToHexColor(-1,5,5)).to.be.undefined;
    });
    it('red undefined wrong', () => {
        expect(rgbToHexColor('1',5,5)).to.be.undefined;
    });
    it('red undefined decimal', () => {
        expect(rgbToHexColor(1.1,5,5)).to.be.undefined;
    });

    it('red undefined bottom', () => {
        expect(rgbToHexColor(270,5,5)).to.be.undefined;
    });

    it('green undefined top', () => {
        expect(rgbToHexColor(200,-10,3)).to.be.undefined;
    });

    it('green undefined wrong', () => {
        expect(rgbToHexColor(200,"10",3)).to.be.undefined;
    });

    it('green undefined decimal', () => {
        expect(rgbToHexColor(200,1.1,3)).to.be.undefined;
    });

    it('green undefined bottom', () => {
        expect(rgbToHexColor(200,280,2)).to.be.undefined;
    });

    it('empty undefined', () => {
        expect(rgbToHexColor()).to.be.undefined;
    });

    it('correct value', () => {
        expect(rgbToHexColor(200,200,200)).to.equal('#C8C8C8');
    });

    it('correct value 1', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });

    it('correct value 2', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

});





