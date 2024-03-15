import { create, getAll } from '@/controllers/todos/v1'
import express from 'express'

const router = express.Router()

router.route('/').get(getAll)
router.route('/').post(create)

export default router
