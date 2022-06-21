//import express from "express";
import koa from "koa";
import koaBody from "koa-body"; 
import userRouter from "./src/router/user.router.js";

//const app = express();
const app = new koa();

//app.use(express.static("public"));
app.use(koaBody());

app.use(userRouter.routes());


app.listen(8080, () => {
  console.log("Server is running on port 8080 http://localhost:8080");
});
 
