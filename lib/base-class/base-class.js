/**
 * Created by ShrimpTang on 2015/11/16.
 */
angular.module('BaseClass', [])
    .factory('BaseClass', ['BCBase', function (Base) {
        var BaseClass = {};
        BaseClass.Base = Base;
        return BaseClass;
    }]);