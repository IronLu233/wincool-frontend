const Koa = require('koa');
const { apiRouter, indexRouter } = require('./router');
const ejsLoader = require('koa-ejs');
const path = require('path');
const app = new Koa();
ejsLoader(app, {
  root: path.join('views'),
  layout: false,
})

app
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods())
  .use(indexRouter.routes())
  .use(indexRouter.allowedMethods())

app.listen(3000);

module.exports.app = app;
