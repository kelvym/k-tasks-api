import { client } from '@/connection'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'

export const getOne = async (req: Request, res: Response) => {
  const result = await client
    .db('k-tasks')
    .collection('notes')
    .findOne({
      _id: new ObjectId(req.params.id),
    })

  res.status(200).send(result)
}
