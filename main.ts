import Connection from './connection.ts'
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const app = new Application();
const router = new Router();
const __CONN = new Connection("db-grocery")

app.use(oakCors())
app.use(router.routes())
app.use(router.allowedMethods())

router.post('/account/create', async (ctx) => { 
  if (ctx.request.hasBody) { 
    const body = await ctx.request.body.json() 

    __CONN.insertInto("users", [{
      "username": body?.username || "",
      "firstName": body?.firstName || "",
      "lastName": body?.lastName || "",
      "email": body?.email || "",
      "password": body?.password || "",
    }])

    ctx.response.status = 200;
    ctx.response.body = { "message": "Added user successfully" }

  } else { 
    ctx.response.status = 400; 
    ctx.response.body = { "error": "Issue adding user" }
  }
  });

await app.listen({ port: 8000 })
