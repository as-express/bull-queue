import Joi from 'joi';
export const createSchema = Joi.object({
    message: Joi.string().required(),
});
