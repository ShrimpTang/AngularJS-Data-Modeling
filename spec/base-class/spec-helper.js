/**
 * Created by ShrimpTang on 2015/11/16.
 */
var Mocks, BaseClass, Post;
beforeEach(function () {
    module('BaseClass','Mocks');
    inject(function (_BaseClass_, _Mocks_) {
        BaseClass = _BaseClass_;
        Mocks = _Mocks_;
        Post = Mocks.Post;
    })
});
//beforeEach(module('BaseClass'));
//beforeEach(module('Mocks'));
//beforeEach(inject(function (_BaseClass_, _Mocks_) {
//    BaseClass = _BaseClass_;
//    Mocks = _Mocks_;
//    Post = Mocks.Post;
//}));