import koaRouter from "koa-router";
import UserController from "../controller/user.controller.js";

const router = new koaRouter({
  prefix: "/user",
});

router.get("/", async (ctx) => {
  ctx.body = {
    status: "success",
    data: UserController.getUsers(),
  };
});

router.post("/", async (ctx) => {
  ctx.body = {
    status: "success",
    data: UserController.createUser(ctx.request.body),
  };
});

router.put("/", async (ctx) => {
  ctx.body = {
    status: "success",
    data: UserController.updateUser(ctx.request.body),
  };
});


export default router;
