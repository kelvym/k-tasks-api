import { TodoModel } from '@/models/todo'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import { z } from 'zod'

const paramsSchema = z.object({
  type: z.string(),
  title: z.string(),
  description: z.string(),
  level: z.number(),
})

export const update = async (req: Request, res: Response) => {
  const validationParams = paramsSchema.safeParse({
    id: req.params.id,
    type: req.body.type,
    title: req.body.title,
    description: req.body.description,
    level: req.body.level,
  })

  if (!validationParams.success) {
    res.status(400).send(validationParams.error)

    return
  }

  try {
    await TodoModel.updateOne(
      {
        _id: new ObjectId(req.params.id),
      },
      {
        $set: {
          type: req.body.type,
          title: req.body.title,
          description: req.body.description,
          level: req.body.level,
        },
      }
    )

    res.status(200).send({})
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while updating the todo' })
  }
}
