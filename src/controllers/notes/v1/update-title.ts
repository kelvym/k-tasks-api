import { NotesModel } from '@/models/notes'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import { z } from 'zod'

const paramsSchema = z.object({
  id: z.string(),
  title: z.string(),
})

export const updateTitle = async (req: Request, res: Response) => {
  const validationParams = paramsSchema.safeParse({
    id: req.params.id,
    externalUserId: req.auth.userId,
    title: req.body.title,
  })

  if (!validationParams.success) {
    res.status(400).send(validationParams.error)

    return
  }

  try {
    await NotesModel.updateOne(
      {
        _id: new ObjectId(req.params.id),
      },
      {
        $set: {
          title: req.body.title,
        },
      }
    )

    res.status(200).send({})
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while updating the note' })
  }
}
