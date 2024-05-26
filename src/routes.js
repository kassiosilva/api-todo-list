import express from 'express'

import { login } from './controllers/login.js'
import { register } from './controllers/register.js'
import { authenticate } from './middlewares/auth.js'

export const routes = express.Router()

routes.post('/register', register)
routes.post('/login', login)

routes.use(authenticate)
