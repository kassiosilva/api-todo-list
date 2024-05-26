import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'

export async function login(req, res, next) {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' })
    }

    const passwordMatch = await user.compareHash(password)

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Senha incorreta' })
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1 hour',
    })

    res.json({ token })
  } catch (error) {
    next(error)
  }
}
