import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.MONGODB_URL || ''

export async function connect() {
  await mongoose
    .connect(url, {
      autoCreate: false,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Error connecting to MongoDB', err))
}
