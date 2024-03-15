import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node'
import express from 'express'
import notesRouter from './notes'
import todoRouter from './todo'

const router = express.Router()

router.use('/v1/notes', ClerkExpressRequireAuth({}), notesRouter)
router.use('/v1/todo', ClerkExpressRequireAuth({}), todoRouter)

export default router
