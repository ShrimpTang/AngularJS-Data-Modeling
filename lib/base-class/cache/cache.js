/**
 * Created by ShrimpTang on 2015/11/17.
 */
angular.module('BaseClass')
    .factory('BCCache', function () {
        function Cache() {
            privateVariable(this, 'cache', function (instance, primaryKey) {
                if (instance && instance[primaryKey] !== undefined) {
                    this[instance[primaryKey]] = instance;// this['$id'] = instance;
                }
            });
            privateVariable(this, 'isEmpty', function () {
                return !!(!Object.keys(this).length);
            });

            privateVariable(this, 'where', function (terms) {
                return _.where(this, terms, this);
            });
        }

        return Cache;
    });