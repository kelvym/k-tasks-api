import { client } from '@/connection'
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
    title: req.body.title,
  })

  if (!validationParams.success) {
    res.status(400).send(validationParams.error)

    return
  }

  const { id, title } = validationParams.data

  await client
    .db('k-tasks')
    .collection('notes')
    .updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          title,
        },
      }
    )

  res.status(200).send({})
}
