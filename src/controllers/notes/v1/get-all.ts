import { NoteModel } from '@/models/note'
import { Request, Response } from 'express'

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await NoteModel.find({ externalUserId: req.auth.userId })

    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while getting all notes' })
  }
}
