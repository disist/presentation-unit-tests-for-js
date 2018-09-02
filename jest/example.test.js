const sut = require('./example');

describe('Tests for example', function () {

    describe('the trimString function', function () {
        let trimString;

        beforeEach(() => {
            trimString = sut.trimString;
        });

        it('should remove leading whitespace', function () {
            expect(trimString('   name')).toBe('name');
        });

        it('should remove trailing whitespace', function () {
            expect(trimString('name   ').length).toEqual(4);
        });

        it('should remove leading and trailing whitespace', function () {
            expect(trimString('  name  ')).toBe('name');
        });

    });

    describe('the trimIfNeeded function', function () {
        let trimIfNeeded;

        beforeEach(() => {
            trimIfNeeded = sut.trimIfNeeded;

            spyOn(sut, 'trimString');
        });

        it('should call trimString when need to trim', function () {
            trimIfNeeded('   name');

            expect(sut.trimString).toHaveBeenCalled();
        });

    });

});
