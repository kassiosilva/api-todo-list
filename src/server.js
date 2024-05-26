import http from 'node:http'
import { connectDB } from './database.js'

connectDB()

const server = http.createServer((req, res) => {
  res.end('Olá Kássio')
})

server.listen(process.env.PORT || 3333, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT} 🚀️`)
})
