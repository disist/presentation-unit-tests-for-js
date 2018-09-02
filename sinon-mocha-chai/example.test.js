const chai = require('chai');
const sinon = require('sinon');
chai.use(require('sinon-chai'));

const sut = require('./example');

let assert = chai.assert;
chai.should();

describe('Tests for example', function () {

    describe('the trimString function', function () {
        let trimString;

        beforeEach(() => {
            trimString = sut.trimString;
        });

        it('should remove leading whitespace', function () {
            trimString('   name').should.equal('name');
        });

        it('should remove trailing whitespace', function () {
            trimString('name   ').should.have.length(4);
        });

        it('should remove leading and trailing whitespace', function () {
            assert(trimString('  name  '), 'name');
        });

    });

    describe('the trimIfNeeded function', function () {
        let trimIfNeeded;

        beforeEach(() => {
            trimIfNeeded = sut.trimIfNeeded;

            sinon.spy(sut, 'trimString');
        });

        it('should call trimString when need to trim', function () {
            trimIfNeeded('   name');

            sut.trimString.should.have.been.called;
        });

    });

});
