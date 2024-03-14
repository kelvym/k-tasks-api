import {
  create,
  getAll,
  getOne,
  remove,
  updateText,
  updateTitle,
} from '@/controllers/notes/v1'
import express from 'express'

const router = express.Router()
router.route('/').get(getAll)
router.route('/:id').get(getOne)
router.route('/').post(create)
router.route('/:id/text').put(updateText)
router.route('/:id/title').put(updateTitle)
router.route('/:id').delete(remove)

export default router
