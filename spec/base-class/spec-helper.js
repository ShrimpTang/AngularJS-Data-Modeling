/**
 * Created by ShrimpTang on 2015/11/16.
 */
var Mocks, BaseClass, Post;
beforeEach(function () {
    module('BaseClass', 'Mocks');
    inject(function ($injector) {
        BaseClass = $injector.get('BaseClass');
        Mocks = $injector.get('Mock');
        Post = Mocks.Post;
    })
});
