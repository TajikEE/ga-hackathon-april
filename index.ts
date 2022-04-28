import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
// import {
//   WebSocketClient,
//   WebSocketServer,
// } from "https://deno.land/x/websocket@v0.1.4/mod.ts";

const app = new Application();

app.use(
  oakCors({
    origin: "http://localhost:8080",
  })
);

const sentences = ['She danced with him.', 'OK, here it is. I got it.', 'Who do you think I am?', 'Actually, now that I think about it, a lot of people in cities here take the bus also.']

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world of Conan!";
  })
  .get("/sentences", (context) => {
    context.response.body = sentences;
  })

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
