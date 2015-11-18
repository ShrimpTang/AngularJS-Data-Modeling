/**
 * Created by ShrimpTang on 2015/11/16.
 */
angular.module('BaseClass')
.factory('BCBase',['BCCacheable',function (Cacheable) {
        function Base(attributes){
            var _constructor = this;
            var _prototype = _constructor.prototype;
            privateVariable(_constructor,'primarykey','id');
            _constructor.new = function (attributes) {
                var instance = new _constructor(attributes)
                _constructor.cache(instance);
                return instance;
            }
            //function cache(instance){
            //_constructor.cached.cache(instance,_constructor.primarykey)
            //}
            //_constructor.cached = new Cache();
            _constructor.extend(Cacheable);
        }
        return Base;
    }]);