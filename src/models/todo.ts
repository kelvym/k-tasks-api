import { Schema, model } from 'mongoose'

const todoSchema = new Schema({
  externalUserId: { type: String, required: true },
  type: String,
  title: String,
  description: String,
  dateCreated: Date,
  dateFinished: { type: Date, required: false },
  level: Number,
  isFinished: Boolean,
})

export const TodoModel = model('Todos', todoSchema)
