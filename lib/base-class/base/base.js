/**
 * Created by ShrimpTang on 2015/11/16.
 */
angular.module('BaseClass')
.factory('BCBase',[function () {
        function Base(attributes){
            var _constructor = this;
            var _prototype = _constructor.prototype
        }
        return Base;
    }]);