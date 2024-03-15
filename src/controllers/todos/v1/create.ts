import { TodoModel } from '@/models/todo'
import { WithAuthProp } from '@clerk/clerk-sdk-node'
import { Request, Response } from 'express'
import { z } from 'zod'

const todoSchema = z.object({
  type: z.string(),
  title: z.string(),
  description: z.string(),
  level: z.number(),
})

export const create = async (req: WithAuthProp<Request>, res: Response) => {
  const body = req.body
  const validationParams = todoSchema.safeParse(body)

  if (!validationParams.success) {
    res.status(400).send(validationParams.error)

    return
  }

  try {
    const todo = new TodoModel({
      externalUserId: req.auth.userId,
      type: body.type,
      title: body.title,
      description: body.description,
      level: body.level,
    })
    const result = await todo.save()

    res.status(200).send({ id: result.id })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .send({ error: 'An error occurred while creating the todo item' })
  }
}
