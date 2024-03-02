import { client } from '@/connection'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import { z } from 'zod'

const paramsSchema = z.object({
  id: z.string(),
  text: z.string(),
})

export const updateText = async (req: Request, res: Response) => {
  const validationParams = paramsSchema.safeParse({
    id: req.params.id,
    text: req.body.text,
  })

  if (!validationParams.success) {
    res.status(400).send(validationParams.error)

    return
  }

  const { id, text } = validationParams.data

  await client
    .db('k-tasks')
    .collection('notes')
    .updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          text,
        },
      }
    )

  res.status(200).send({})
}
