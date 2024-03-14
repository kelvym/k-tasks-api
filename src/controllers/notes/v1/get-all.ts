import { NotesModel } from '@/models/notes'
import { Request, Response } from 'express'

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await NotesModel.find({})

    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while creating the note' })
  }
}
