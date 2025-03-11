import { Router } from "express"
import * as controller from './controller.js'
import { validator } from "../../utils/middleware/validation.js"
import { createSchema } from "./schemas/create.js"
import { updateSchema } from "./schemas/update.js"

const router = Router()

router.post('/', validator(createSchema, 'body'), controller.create)
router.get('/', controller.get)
router.put('/:id',  validator(updateSchema, 'body'), controller.update)
router.delete('/:id', controller.remove)

export default router