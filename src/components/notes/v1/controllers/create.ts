import { Request, Response } from 'express'
import { client } from '@/connection'

export const create = async (req: Request, res: Response) => {
  const result = await client.db('k-tasks').collection('notes').insertOne({
    title: '',
    text: '',
  })

  res.status(200).send({ id: result.insertedId })
}
