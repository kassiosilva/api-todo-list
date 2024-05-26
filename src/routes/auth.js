import express from 'express'

import { login } from '../controllers/login.js'
import { register } from '../controllers/register.js'

export const authRouter = express.Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
