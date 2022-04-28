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

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world of Conan!";
  })
  .get("/test", (context) => {
    context.response.body = Array.from(books.values());
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
