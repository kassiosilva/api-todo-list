import express from 'express'
import { connectDB } from './database.js'
import { routes } from './routes.js'

const server = express()

connectDB()

server.use(express.json())

server.use(routes)

server.listen(process.env.PORT || 3333, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT} 🚀️`)
})
