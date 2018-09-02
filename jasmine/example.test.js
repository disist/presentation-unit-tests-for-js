describe('Tests for example', function () {

    describe('the trimString function', function () {

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

        beforeEach(() => {
            spyOn(window, 'trimString');
        });

        it('should call trimString when need to trim', function () {
            trimIfNeeded('   name');

            expect(trimString).toHaveBeenCalled();
        });

    });

});
