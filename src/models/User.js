import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  try {
    const salt = await bcrypt.genSalt()

    this.password = await bcrypt.hash(this.password, salt)

    next()
  } catch (error) {
    return next(error)
  }
})

userSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password)
  },
}

export const User = mongoose.model('User', userSchema)
