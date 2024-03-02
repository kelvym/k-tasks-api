import express from 'express'
import { create } from './controllers/create'
import { getAll } from './controllers/get-all'
import { remove } from './controllers/remove'
import { updateText } from './controllers/update-text'
import { updateTitle } from './controllers/update-title'

const router = express.Router()

router.route('/').get(getAll)
router.route('/').post(create)
router.route('/:id/text').put(updateText)
router.route('/:id/title').put(updateTitle)
router.route('/:id').delete(remove)

export default router
