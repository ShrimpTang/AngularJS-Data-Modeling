/**
 * Created by ShrimpTang on 2015/11/16.
 */
angular.module('BaseClass')
.factory('BCBase',['BCCache',function (Cache) {
        function Base(attributes){
            var _constructor = this;
            var _prototype = _constructor.prototype;
            privateVariable(_constructor,'primarykey','id');
            _constructor.new = function (attributes) {
                var instance = new _constructor(attributes)
                cache(instance);
                return instance;
            }
            function cache(instance){
            _constructor.cached.cache(instance,_constructor.primarykey)
            }
            _constructor.cached = new Cache();
        }
        return Base;
    }]);