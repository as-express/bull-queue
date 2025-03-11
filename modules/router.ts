import { Router } from 'express'
const router = Router()

import userRouter from './user/router.js'
import eventRouter from './event/router.js'

router.use('/user', userRouter)
router.use('/event', eventRouter)

export default router
