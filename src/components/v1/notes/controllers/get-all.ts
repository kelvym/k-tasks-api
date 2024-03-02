import { Request, Response } from 'express'

export const getAll = (req: Request, res: Response) => {
  res.status(200).send([
    {
      id: 1,
      title: 'how to use X',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
      dateCreated: '2017-01-01',
      dateFinished: '',
    },
    {
      id: 2,
      title: 'asdas asdas asdasd',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
      dateCreated: '2017-01-01',
      dateFinished: '',
    },
  ])
}
