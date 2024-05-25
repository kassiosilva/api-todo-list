import http from 'node:http'

const server = http.createServer((req, res) => {
  res.end('Olá Kássio')
})

server.listen(process.env.PORT || 3333)
