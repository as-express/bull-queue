import asyncHandler from 'express-async-handler';
import * as service from './service.js';
export const create = asyncHandler(async (req, res) => {
    const data = req.body;
    const result = await service.create(data);
    res.status(201).json({ result });
});
