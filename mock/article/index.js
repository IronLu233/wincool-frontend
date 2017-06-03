const Router = require('koa-router');
const router = new Router({ prefix: 'article'});
router.get('/', async (ctx, next) => {
    ctx.body = [
      {
        public_name: '小云',
        public_type: 1,
        label: '城市记忆',
        'title': '关于这个城市，我想到的不多',
        'cover': 'images/cover/关于这个城市',
        'digest': '关于这个城市，我想到的不多',
        'read_times': 300,
        collections: 50,
        praises: 30,
        view_contents: "https://mp.weixin.qq.com/s?__biz=MzI3NDY1ODMwMQ==&tempkey=PDJ%2FJ1FFmHLMsfxtUJDpJ5WoRcqHmus9RqRBi7V3ySmhBcVjboBl49Kl1hyo68NqaiNX1AgztYWGuGttvxMvpIN7eLD8XQkIqWuFmP6ff3dx672oX9%2B7zhNrPBt2%2FYnBpYUe5NfwM6OLBk4%2BYDOHUg%3D%3D&chksm=6b11e7ac5c666ebab92896769dd89810225cffc4523ab0fd31bf461fc7e37eeaa9786600b96f#rd"
      },
      {
        public_name: '小云2',
        public_type: 1,
        label: '城市记忆',
        'title': '关于这个城市，我想到的不多',
        'cover': 'images/cover/关于这个城市',
        'digest': '关于这个城市，我想到的不多',
        'read_times': 200,
        collections: 200,
        praises: 30,
        view_contents: "https://mp.weixin.qq.com/s?__biz=MzI3NDY1ODMwMQ==&tempkey=PDJ%2FJ1FFmHLMsfxtUJDpJ5WoRcqHmus9RqRBi7V3ySmhBcVjboBl49Kl1hyo68NqaiNX1AgztYWGuGttvxMvpIN7eLD8XQkIqWuFmP6ff3dx672oX9%2B7zhNrPBt2%2FYnBpYUe5NfwM6OLBk4%2BYDOHUg%3D%3D&chksm=6b11e7ac5c666ebab92896769dd89810225cffc4523ab0fd31bf461fc7e37eeaa9786600b96f#rd"
      }
    ];
  });
module.exports = router;
