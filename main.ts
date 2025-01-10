import Connection from "./connection.ts";
import { startServer } from "./graphql/init.ts";


const _CONN = new Connection("db-grocery");

Deno.serve({port: 3000}, async (_req) => {
  const _URL = new URL(_req.url);

  return handleResponse({"PageURL": _URL.pathname})
})

function handleResponse (response: any): object {
  return new Response(JSON.stringify({
    headers: {
      'Content-Type': 'application/json'
    },
    body: response
  }))
}

startServer(_CONN)

// await app.listen({ port: 8000 });
