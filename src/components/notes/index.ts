import express from 'express'
import { create } from './v1/controllers/create'
import { getAll } from './v1/controllers/get-all'
import { remove } from './v1/controllers/remove'
import { updateText } from './v1/controllers/update-text'
import { updateTitle } from './v1/controllers/update-title'
import { getOne } from './v1/controllers/get-one'

const router = express.Router()

router.route('/').get(getAll)
router.route('/:id').get(getOne)
router.route('/').post(create)
router.route('/:id/text').put(updateText)
router.route('/:id/title').put(updateTitle)
router.route('/:id').delete(remove)

export default router
