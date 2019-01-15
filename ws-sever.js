const http = require('http')
const websocket = require('ws');

const server = http.createServer((req, res) => {
  res.end("Im connected!")
})

const wss = new websocket.Server({server})
wss.on("headers", (headers, req) => {
  console.log(headers)
})

wss.on('connection', (ws, req)=> {
  console.log(req)
})

wss.on('connection', (ws, req) => {
  ws.send("Welcome to the sebsocket server!")
})

server.listen(8080);

