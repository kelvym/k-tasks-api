import { Schema, model } from 'mongoose'

const todoSchema = new Schema({
  externalUserId: { type: String, required: true },
  type: String,
  title: String,
  description: String,
  dateCreated: String,
  dateFinished: String,
  level: Number,
  isFinished: Boolean,
})

export const TodoModel = model('Todos', todoSchema)
