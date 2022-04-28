import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
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
    const res = { id: randomId(), sentences };
    context.response.body = res;
  });

router.get("/ws", async (ctx) => {
  const sock = await ctx.upgrade();
  return sock;
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
