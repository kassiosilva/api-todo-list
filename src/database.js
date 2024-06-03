import mongoose from 'mongoose'

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)

    console.log('Conectado ao MongoDB!')
  } catch (error) {
    console.error(error)
  }
}
