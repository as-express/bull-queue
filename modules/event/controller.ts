import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import { IEvent } from './interfaces/create.js'
import * as service from './service.js'

export const create = asyncHandler(async(req: Request, res: Response) => {
    const data: IEvent = req.body
    const result = await service.create(data)

    res.status(201).json({result})
})
