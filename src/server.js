import http from "node:http";

const server = http.createServer((req, res) => {
  res.end("Olá Kássio");
});

server.listen(3333);
