import { NotesModel } from '@/models/notes'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'

export const getOne = async (req: Request, res: Response) => {
  try {
    const result = await NotesModel.findOne({
      _id: new ObjectId(req.params.id),
      externalUserId: req.auth.userId,
    })

    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while creating the note' })
  }
}
