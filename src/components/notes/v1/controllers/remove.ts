import { Request, Response } from 'express'

export const remove = (req: Request, res: Response) => {
  const id = req.params.id

  res.status(200).send('Note removed: ' + id)
}
