/**
 * Created by ShrimpTang on 2015/11/23.
 */
describe('BCValidatable', function () {
    var Validatable, Validator;
    beforeEach(function () {
        inject(function ($injector) {
            Validatable = $injector.get('BCValidatable.Validator');
            Validator = $injector.get('BCValidatable.Validator');
        });
    });
    describe('', function () {
        var minValidator, configuredMinFn;
        beforeEach(function () {
            function min(value) {
                return value.length >= this.min;
            }

            min.message = function () {
                return "Must be greater than " + this.min;
            }
            minValidator = new Validator(min);
            configuredMinFn = minValidator.configure(5);
        });
        it('curries in the configured values to the validationFn', function () {
            expect(configuredMinFn('hello')).toEqual(true);
            expect(configuredMinFn('hi')).toEqual(false);
        });
    });
});