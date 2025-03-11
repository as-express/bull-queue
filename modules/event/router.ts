import { Router } from "express";
import * as controller from './controller.js'
import { validator } from "../../utils/middleware/validation.js";
import { createSchema } from "./schemas/create.js";

const router = Router()

router.post('/', validator(createSchema, 'body'), controller.create)

export default router