import { client } from '@/connection'
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

  const { id } = validationParams.data

  await client
    .db('k-tasks')
    .collection('notes')
    .deleteOne({
      _id: new ObjectId(id),
    })

  res.status(200).send({})
}
