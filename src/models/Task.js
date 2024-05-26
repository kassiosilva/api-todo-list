import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { Schema } = mongoose

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export const Task = mongoose.model('task', taskSchema)
