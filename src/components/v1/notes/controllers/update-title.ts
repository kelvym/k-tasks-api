import { Request, Response } from 'express'
import { z } from 'zod'

const paramsSchema = z.object({
  id: z.string(),
  title: z.string(),
})

export const updateTitle = (req: Request, res: Response) => {
  const validationParams = paramsSchema.safeParse({
    id: req.params.id,
    title: req.body.title,
  })

  if (!validationParams.success) {
    res.status(400).send(validationParams.error)

    return
  }

  const { id, title } = validationParams.data

  res.status(200).send({ TEMP_status: `Note updated: ${id}`, title })
}
