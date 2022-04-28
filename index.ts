import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
// import {
//   WebSocketClient,
//   WebSocketServer,
// } from "https://deno.land/x/websocket@v0.1.4/mod.ts";
import { sentences, randomId } from "./data.ts";

const app = new Application();

app.use(
  oakCors({
    origin: "http://localhost:8080",
  })
);



const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/sentences", (context) => {
    const res = {id: randomId(), sentences}
    context.response.body = res;
  });

// const wss = new WebSocketServer(8080);
// wss.on("connection", function (ws: WebSocketClient) {
//   ws.on("message", function (message: string) {
//     console.log(message);
//     ws.send(message);
//   });
// });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
