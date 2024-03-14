import { Schema, model } from 'mongoose'

const notesSchema = new Schema({
  externalUserId: String,
  title: String,
  text: String,
})

export const NotesModel = model('Notes', notesSchema)
