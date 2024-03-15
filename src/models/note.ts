import { Schema, model } from 'mongoose'

const noteSchema = new Schema({
  externalUserId: String,
  title: String,
  text: String,
})

export const NoteModel = model('Notes', noteSchema)
