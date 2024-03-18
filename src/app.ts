import { LooseAuthProp } from '@clerk/clerk-sdk-node'
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import routes from './routes'

const app: Application = express()

declare module 'express-serve-static-core' {
  interface Request extends LooseAuthProp {}
}

app.use(express.json())
app.use(cors())
app.use(routes)

app.use((req: Request, res: Response) => {
  res.status(401).send('Unauthenticated!')
})

export default app
