const Router = require('koa-router');
const article = require('./article');
const user = require('./user');

const apiRouter = new Router({ prefix: '/api'});
const subRouterArray = [
  article,
  user,
]
subRouterArray.forEach(r => apiRouter.use(r.routes(), r.allowedMethods()));

const indexRouter = new Router();
indexRouter.get('/', async (ctx, next) => {
  await ctx.render('index');
})

module.exports = { apiRouter, indexRouter };
