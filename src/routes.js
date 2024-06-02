import express from 'express'
import cors from 'cors'

import { authenticate } from './middlewares/auth.js'

import { login } from './controllers/login.js'
import { register } from './controllers/register.js'
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from './controllers/task.js'

export const routes = express.Router()

routes.use(cors())

// Autenticação
routes.post('/register', register)
routes.post('/login', login)

// Verifica se usuário está autenticado
routes.use(authenticate)

// Tasks
routes.get('/tasks', getTasks)
routes.post('/task', createTask)
routes.put('/task/:id', updateTask)
routes.delete('/task/:id', deleteTask)
