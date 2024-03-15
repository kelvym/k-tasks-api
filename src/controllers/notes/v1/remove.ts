import { NotesModel } from '@/models/notes'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import { z } from 'zod'

const paramsSchema = z.object({
  id: z.string(),
})

export const remove = async (req: Request, res: Response) => {
  const validationParams = paramsSchema.safeParse({
    id: req.params.id,
  })

  if (!validationParams.success) {
    res.status(400).send(validationParams.error)

    return
  }

  try {
    await NotesModel.deleteOne({
      _id: new ObjectId(req.params.id),
      externalUserId: req.auth.userId,
    })

    res.status(200).send({})
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while removing the note' })
  }
}
