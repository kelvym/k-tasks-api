import { create, getAll, update } from '@/controllers/todos/v1'
import express from 'express'

const router = express.Router()

router.route('/').get(getAll)
router.route('/').post(create)
router.route('/:id').put(update)

export default router
