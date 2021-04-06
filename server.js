// Import prerequisite packages
const next = require('next');
const Koa = require('koa');
const Router = require('koa-router');
const serveStatic = require('koa-static')
// Initialize NextJs instance and expose request handler
const app = next({ dev :true})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    router.get('(.*)', async (ctx) => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(serveStatic(__dirname + '/static'))
    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })

    server.use(router.routes())
    server.listen(3000, () => {
      console.log(`> Ready on http://localhost:3000`)
    })
  })