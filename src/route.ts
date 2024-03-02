import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node'
import express from 'express'
import notesRouter from './components/v1/notes'

const router = express.Router()

router.use('/v1/notes', ClerkExpressRequireAuth({}), notesRouter)

export default router
