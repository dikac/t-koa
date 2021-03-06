import Router from "@koa/router";
import Koa from "./server";

const router : Router = new Router();

Koa.koa.use(router.routes());
Koa.koa.use(router.allowedMethods());

export default Object.assign(Koa, {
    router : router,
});
