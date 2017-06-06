const Koa = require('koa');
const { apiRouter, indexRouter } = require('./router');
const ejsLoader = require('koa-ejs');
const path = require('path');
const serve = require('koa-static');

const app = new Koa();

ejsLoader(app, {
  root: path.join('views'),
  layout: false,
}) // template engine


console.log(path.join(__dirname, '..', 'public/'));
app
  .use(serve(path.join(__dirname, '..', 'public/'))) // static file server
  .use(apiRouter.routes()) //api routes
  .use(apiRouter.allowedMethods())
  .use(indexRouter.routes()) // index routes
  .use(indexRouter.allowedMethods());

app.listen(3000);

module.exports.app = app;
