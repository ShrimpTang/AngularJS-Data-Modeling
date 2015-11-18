/**
 * Created by ShrimpTang on 201 5/11/16.
 */
Function.prototype.inherits = function (baseclass) {
    var _constructor = this;
    _constructor = baseclass.apply(_constructor);
}

Function.prototype.extend = function (Module) {
    var properies = new Module(),
        propertNames = Object.getOwnPropertyNames(properies),
        classPropNames = _.remove(propertNames, function (propName) {
            return propName.slice(0, 2) != '__';
        });
    _.each(classPropNames, function (cpn) {
        var propertDescriptor = Object.getOwnPropertyDescriptor(properies, cpn);
        Object.defineProperty(this, cpn, propertDescriptor);
    }, this);
}

Function.prototype.include = function (Module) {
    var methods = new Module(),
        propNames = Object.getOwnPropertyNames(methods),
        instancePropNames = _.remove(propNames, function (val) {
            return val.slice(0, 2) == '__';
        }),
        oldConstructor = this.new;
    this.new = function () {
        var instance = oldConstructor.apply(this,arguments);
        _.each(instancePropNames, function (ipn) {
            var propDescriptor = Object.getOwnPropertyDescriptor(methods,ipn);
            Object.defineProperty(instance,ipn.slice(2),propDescriptor);
        });
        return instance;
    }
}

function privateVariable(object, name, value) {
    var val;
    Object.defineProperty(object, name, {
        enumerable: false,
        configurable: false,
        get: function () {
            return val
        },
        set: function (newval) {
            val = newval
        }
    });
    if (value !== undefined) object[name] = value;
}

angular.module('BaseClass', [])
    .factory('BaseClass', ['BCBase', function (Base) {
        var BaseClass = {};
        BaseClass.Base = Base;
        return BaseClass;
    }]);