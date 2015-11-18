/**
 * Created by ShrimpTang on 2015/11/16.
 */
describe('BaseClass', function () {


    describe('Inheritance ', function () {
        beforeEach(function () {
            Post.inherits(SomeBaseClass);
            function SomeBaseClass(attributes) {
                var _constructor = this;
                var _prototype = _constructor.prototype;
                _constructor.new = function (attributes) {
                    var instance = new _constructor(attributes);
                    return instance;
                }
                _prototype.$save = angular.noop;
            }
        });

        it('add methods to the child class ', function () {

            expect(Post.new).toBeDefined();
        });

        it('add method to the instances', function () {
            var post = Post.new({});
            expect(post.$save).toBeDefined();
        });
    });

    describe('Extension', function () {
        var post ;
        beforeEach(function () {
            Post.extend(Postable);
            Post.include(Postable);
            function Postable() {
                this.posted = true;
                this.post = function () {
                }
                Object.defineProperty(this, 'poster', {
                    get: function () {
                        return 'me';
                    }
                })
                this.__posted = true;
                this.__post = function () {

                }
                Object.defineProperty(this, '__poster', {
                    get: function () {
                        return 'me';
                    }
                });
            }
            post = Post.new({});
        });
        it('adds properties from the mixin to the class', function () {
            expect(Post.posted).toBeTruthy();
        });

        it('adds properties from the mixin to the class', function () {
            expect(Post.post).toBeDefined();
        });

        it('adds defineProperty from the mixin to the class', function () {
            expect(Post.poster).toEqual('me');
        });


        it('adds properties from the mixin to the class', function () {
            expect(post.posted).toBeTruthy();
        });

        it('adds properties from the mixin to the class', function () {
            expect(post.post).toBeDefined();
        });

        it('adds defineProperty from the mixin to the class', function () {
            expect(post.poster).toEqual('me');
        });
    });
});
