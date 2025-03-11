import express from 'express'
import 'colors'
import dotenv from 'dotenv' 
import { env } from './config/env.js'
import  errorHandler  from './utils/middleware/error-handle.js'
import router from './modules/router.js'
dotenv.config()

const app = express()
const port = Number(env.PORT) || 3001

app.use(express.json())
app.use(errorHandler)
app.use('/api', router)

app.listen(port, () => {
    console.log(`Server run on port ${port}`.green)
})