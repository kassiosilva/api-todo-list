import { User } from '../models/User.js'

export async function register(req, res, next) {
  const { email } = req.body

  const isUserExists = await User.findOne({ email })

  if (isUserExists) {
    return res.status(409).send('O usuário já existe')
  }

  try {
    const user = await User.create(req.body)

    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}
