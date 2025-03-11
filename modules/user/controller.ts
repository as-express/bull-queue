import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import { ICreateUser } from './interfaces/create.js'
import * as service from './service.js'
import { IUpdateUser } from './interfaces/update.js'

export const create = asyncHandler(async(req: Request, res: Response) => {
    try {

        const data: ICreateUser = req.body
        const result = await service.create(data)
        
        res.status(201).json({result})
    } catch(err) {
        console.log(err)
    }
})

export const get = asyncHandler(async(req: Request, res: Response): Promise<void> => {
    const result = await service.get()

    res.status(200).json({result})
})

export const update = asyncHandler(async(req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    const data: IUpdateUser = req.body
    const result = await service.update(+id, data)

    res.status(200).json({result})
})

export const remove = asyncHandler(async(req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    const result = await service.remove(+id)
    
    res.status(200).json({result})
})

