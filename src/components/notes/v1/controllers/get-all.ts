import { client } from '@/connection'
import { Request, Response } from 'express'

export const getAll = async (req: Request, res: Response) => {
  const cursor = await client.db('k-tasks').collection('notes').find({})
  const result = await cursor.toArray()

  res.status(200).send(result)
}
