import { createServer, IncomingMessage, ServerResponse } from "http";

const API_PORT: number = parseInt(process.env.PING_LISTEN_PORT || "8000", 10);

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "GET" && req.url === "/ping") {
        const headers: string = JSON.stringify(req.headers, null, 2);
        const responseBody: string = JSON.stringify({ headers });
        
        res.writeHead(200, {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(responseBody),
        });
        res.end(responseBody);
    } else {
        res.writeHead(404, { "Content-Length": 0 });
        res.end();
    }
});

server.listen(API_PORT, () => {
    console.log(`Serveur disponible sur http://127.0.0.1:${API_PORT}`);
});