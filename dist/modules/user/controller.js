import asyncHandler from 'express-async-handler';
import * as service from './service.js';
export const create = asyncHandler(async (req, res) => {
    try {
        const data = req.body;
        const result = await service.create(data);
        res.status(201).json({ result });
    }
    catch (err) {
        console.log(err);
    }
});
export const get = asyncHandler(async (req, res) => {
    const result = await service.get();
    res.status(200).json({ result });
});
export const update = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const result = await service.update(+id, data);
    res.status(200).json({ result });
});
export const remove = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const result = await service.remove(+id);
    res.status(200).json({ result });
});
