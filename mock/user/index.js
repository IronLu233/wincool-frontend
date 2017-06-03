const Router = require('koa-router');
const router = new Router({ prefix: 'user' });

router.get('/:id', async(ctx, next) => {
  if (ctx.params.id == 1) {
    ctx.body = {
      balance: 500,
      my_attentions: 20,
      attentions: 20,
      issues: 20,
      collections: 20,
      labels: 6,
    }
  } else {
    ctx.status = 404;
    ctx.body = {
      message: '无该用户'
    }
  }
})

module.exports = router;
