// Import prerequisite packages
const next = require("next");
const Koa = require("koa");
const Router = require("koa-router");
const serveStatic = require("koa-static");
// Initialize NextJs instance and expose request handler
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  // start
  // 利用koa-router去把/a/1这种格式的路由
  // 代理到/a?id=1去，这样就不会404了
  router.get("/test/:id", async (ctx) => {
    const id = ctx.params.id;
    await handle(ctx.req, ctx.res, {
      pathname: "/test",
      query: {
        id,
      },
    });
    ctx.respond = false;
  });
  server.use(router.routes());
  // end
  server.use(serveStatic(__dirname + "/static"));
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(3000, () => {
    console.log(`koa server listening on 3000`);
  });
});
