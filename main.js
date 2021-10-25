import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

const PORT = Deno.env.get("PORT") || "8000";

function handler(req) {
    return new Response("Hello world from deno");
}

console.log(`Listening on http://localhost:${PORT}`);
await listenAndServe(`:${PORT}`, handler);
