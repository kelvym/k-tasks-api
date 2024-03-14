import { NotesModel } from '@/models/notes'
import { WithAuthProp } from '@clerk/clerk-sdk-node'
import { Request, Response } from 'express'

export const create = async (req: WithAuthProp<Request>, res: Response) => {
  try {
    const note = new NotesModel({
      externalUserId: req.auth.userId,
      title: '',
      text: '',
    })
    const result = await note.save()

    res.status(200).send({ id: result.id })
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while creating the note' })
  }
}
