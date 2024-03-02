import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './route'

const app: Application = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack)
  res.status(401).send('Unauthenticated!')
})

export default app
