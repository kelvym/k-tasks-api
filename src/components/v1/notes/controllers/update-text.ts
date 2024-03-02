import { Request, Response } from 'express'
import { z } from 'zod'

const paramsSchema = z.object({
  id: z.string(),
  text: z.string(),
})

export const updateText = (req: Request, res: Response) => {
  const validationParams = paramsSchema.safeParse({
    id: req.params.id,
    text: req.body.text,
  })

  if (!validationParams.success) {
    res.status(400).send(validationParams.error)

    return
  }

  const { id, text } = validationParams.data

  res.status(200).send({ TEMP_status: `Note updated: ${id}`, text })
}
