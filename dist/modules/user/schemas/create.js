import Joi from 'joi';
export const createSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    telegram: Joi.string(),
    phone: Joi.string()
});
