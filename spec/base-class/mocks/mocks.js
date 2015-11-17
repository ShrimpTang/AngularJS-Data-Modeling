/**
 * Created by ShrimpTang on 2015/11/16.
 */
angular.module('Mocks', [])
    .factory('Mock', ['Post', function (Post) {
        var Mock = {};
        Mock.Post =Post;
        return Mock;
    }]);