/**
 * Created by ShrimpTang on 2015/11/17.
 */
describe('BCCache', function () {
    it('adds a cache to the model', function () {
        expect(Post.cached).toBeDefined();
    });

    it('adds new instances to the cache when they are create', function () {
        var post = Post.new({id:1});
        expect(Post.cached[1]).toEqual(post);
    });
    it('cache 默认为空', function () {
       expect(Post.cached.isEmpty()).toEqual(true);
    });
    it('查找', function () {
        var post = Post.new({id:1});
        expect(Post.cached.where({id:1})).toEqual([post]);
    })
});